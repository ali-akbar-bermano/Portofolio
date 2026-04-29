import { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const posRef = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animate = () => {
      ringPos.current.x += (posRef.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (posRef.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const handleHover = () => {
      const hoverables = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .card, .skills-tab, .skill-bubble, .tech-bubble',
      );
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    // Delay to allow DOM to be ready
    const timer = setTimeout(handleHover, 500);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timer);
    };
  }, []);

  const hoveringClass = isHovering ? " hovering" : "";
  const clickingClass = isClicking ? " clicking" : "";

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot${hoveringClass}${clickingClass}`}
        aria-hidden="true"
      >
        <svg
          className="cursor-star"
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill="currentColor"
        >
          <polygon points="12,2 15,10 23,10 17,15 20,23 12,18 4,23 7,15 1,10 9,10" />
        </svg>
      </div>
      <div
        ref={ringRef}
        className={`cursor-ring${hoveringClass}${clickingClass}`}
        aria-hidden="true"
      ></div>
    </>
  );
}
