import React from "react";

export default function FallingCircles() {
  const circles = Array.from({ length: 10 }).map((_, i) => {
    const size = `${Math.floor(Math.random() * 6) + 3}px`;
    const left = `${Math.floor(Math.random() * 100)}%`;
    const duration = `${5 + Math.random() * 4}s`;
    const opacity = 0.15 + Math.random() * 0.2;

    return (
      <div
        key={i}
        className="falling-circle absolute top-0 rounded-full bg-white"
        style={{
          width: size,
          height: size,
          left,
          animationDuration: duration,
          opacity,
        }}
      />
    );
  });

  return (
    <div className="pointer-events-none absolute inset-0 z-0">{circles}</div>
  );
}
