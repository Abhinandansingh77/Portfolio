import { useEffect, useRef, useState } from "react";

// Fades and lifts its content in the first time it enters the viewport
// (.reveal / .is-visible in styles.css).
export function Reveal({ as: Tag = "div", id, className = "", delay = 0, children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      setIsVisible(true);
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    // Already on screen at mount (the top of a page): reveal straight away
    // rather than wait on the observer.
    const box = node.getBoundingClientRect();
    if (box.bottom > 0 && box.top < window.innerHeight) {
      setIsVisible(true);
      return undefined;
    }

    // Further down: start once the element is actually inside the viewport,
    // so the motion is seen rather than finishing below the fold.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.01 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
