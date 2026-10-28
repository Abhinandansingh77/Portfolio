import { useEffect, useRef, useState } from "react";

// Email and phone, after the Smart Contact Link reference: hovering a detail
// dims and underlines it and opens a small menu above it (send or copy); focus
// and tap open it too, for keyboards and touch. The menu eases up from slightly
// small and low, and closes when the pointer leaves, on an outside tap, on
// Escape, or once an action is done. Shared by the hero and about cards; with
// `inlineCopy` each row also gets a copy icon of its own beside the value.
export const contactRows = [
  {
    id: "email",
    icon: "ri-mail-line",
    value: "hello.abhinandansingh@gmail.com",
    label: "Email address",
    actions: [
      { kind: "link", icon: "ri-send-plane-line", text: "Send email", href: "mailto:hello.abhinandansingh@gmail.com" },
      { kind: "copy", icon: "ri-file-copy-line", text: "Copy email" },
    ],
  },
  {
    id: "phone",
    icon: "ri-phone-line",
    value: "+91-8544999007",
    label: "Phone number",
    actions: [
      { kind: "link", icon: "ri-phone-line", text: "Call", href: "tel:+918544999007" },
      { kind: "copy", icon: "ri-file-copy-line", text: "Copy number" },
    ],
  },
];

// Copies text, falling back to a hidden textarea where the async clipboard
// is unavailable (it needs a focused document and a secure origin).
export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    /* Fall through to the textarea. */
  }

  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    document.body.removeChild(field);
  }
}

const CONTACT_COPIED_FOR = 1200;
// Grace period before a hover menu closes, so the pointer can cross into it.
const CONTACT_CLOSE_DELAY = 160;

export function ContactRows({ className = "", inlineCopy = false }) {
  const listRef = useRef(null);
  const closeTimer = useRef(0);
  const [open, setOpen] = useState(null);
  const [copied, setCopied] = useState(null);

  const openRow = (id) => {
    clearTimeout(closeTimer.current);
    setOpen(id);
  };
  const closeSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), CONTACT_CLOSE_DELAY);
  };
  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (event) => {
      if (!listRef.current?.contains(event.target)) setOpen(null);
    };
    const onKey = (event) => {
      if (event.key === "Escape") {
        listRef.current?.querySelector(`[data-row="${open}"]`)?.focus();
        setOpen(null);
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!copied) return undefined;
    const id = setTimeout(() => {
      setCopied(null);
      setOpen(null);
    }, CONTACT_COPIED_FOR);
    return () => clearTimeout(id);
  }, [copied]);

  const copy = async (row) => {
    if (await copyText(row.value)) setCopied(row.id);
    else setOpen(null);
  };

  return (
    <ul ref={listRef} className={`hero-contact-rows ${className}`.trim()}>
      {contactRows.map((row) => {
        const isOpen = open === row.id;
        return (
          <li
            key={row.id}
            className="hero-contact-row"
            data-kind={row.id}
            onMouseEnter={() => openRow(row.id)}
            onMouseLeave={() => {
              if (!copied) closeSoon();
            }}
          >
            <div className={`hero-contact-menu lg ${isOpen ? "is-open" : ""}`.trim()} aria-hidden={!isOpen} inert={isOpen ? undefined : ""}>
              <span className="hero-contact-menu-label">{row.label}</span>
              <div className="hero-contact-menu-actions">
                {row.actions.map((action) =>
                  action.kind === "link" ? (
                    <a key={action.text} className="hero-contact-action" href={action.href} onClick={() => setOpen(null)}>
                      <i className={action.icon} aria-hidden="true" />
                      {action.text}
                    </a>
                  ) : (
                    <button key={action.text} type="button" className="hero-contact-action" onClick={() => copy(row)}>
                      <i className={copied === row.id ? "ri-check-line" : action.icon} aria-hidden="true" />
                      {copied === row.id ? "Copied" : action.text}
                    </button>
                  ),
                )}
              </div>
            </div>
            <button
              type="button"
              className="hero-contact-value"
              data-row={row.id}
              aria-expanded={isOpen}
              aria-label={`${row.label}: ${row.value}`}
              onFocus={() => openRow(row.id)}
              onClick={() => openRow(row.id)}
            >
              <i className={row.icon} aria-hidden="true" />
              {row.value}
            </button>
            {inlineCopy ? (
              <button
                type="button"
                className={`hero-contact-copy ${copied === row.id ? "is-copied" : ""}`.trim()}
                onClick={() => copy(row)}
                aria-label={copied === row.id ? "Copied" : `Copy ${row.label.toLowerCase()}`}
                title={copied === row.id ? "Copied" : `Copy ${row.label.toLowerCase()}`}
              >
                <i className={copied === row.id ? "ri-check-line" : "ri-file-copy-line"} aria-hidden="true" />
              </button>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
