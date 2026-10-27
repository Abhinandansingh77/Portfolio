// The icon disc at the end of every CTA. It holds the icon twice: on hover
// (or keyboard focus) of the button the first slides out the way the icon
// points as the second slides in behind it. See .cta-icon in styles.css.
export function CtaIcon({ icon = "ri-arrow-right-line", direction = "right" }) {
  return (
    <span className={`cta-icon cta-icon-${direction}`} aria-hidden="true">
      <i className={icon} />
      <i className={icon} />
    </span>
  );
}
