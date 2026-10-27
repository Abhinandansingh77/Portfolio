// An endless row of logos: two identical sets scrolled by -50% in CSS
// (.client-logo-* in styles.css).
export function LogoRail({ items, ariaLabel }) {
  // Two identical sets so the -50% scroll loops seamlessly.
  const track = [...items, ...items];

  return (
    <div className="client-logo-rail">
      <ul className="client-logo-track" aria-label={ariaLabel}>
        {track.map((logo, index) => {
          const isOriginal = index < items.length;
          return (
            <li
              className="client-logo-slot"
              key={`${logo.name}-${index}`}
              aria-hidden={isOriginal ? undefined : "true"}
            >
              {logo.src ? (
                <img
                  className="client-logo-img"
                  src={logo.src}
                  alt={isOriginal ? logo.name : ""}
                  loading="lazy"
                  decoding="async"
                  style={logo.width ? { maxWidth: `${logo.width}px` } : undefined}
                />
              ) : (
                <span className="client-logo-wordmark">{logo.name}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
