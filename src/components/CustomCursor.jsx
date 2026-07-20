import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import "../styles/customCursor.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Disable cursor on touch devices
    if (window.matchMedia("(pointer:fine)").matches) {
      setIsDesktop(true);
    }

    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const down = () => setClick(true);
    const up = () => setClick(false);

    const addHover = () => setHover(true);
    const removeHover = () => setHover(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    const elements = document.querySelectorAll(
      "a, button, input, textarea, select, .cursor-hover"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className={`cursor-ring ${hover ? "cursor-hovered" : ""}`}
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: click ? 0.8 : hover ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 28,
        }}
      />

      {/* Inner Dot */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: click ? 0.7 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
        }}
      />
    </>
  );
}