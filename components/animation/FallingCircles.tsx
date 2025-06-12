// components/FallingCircles.tsx
import React from 'react';

const FallingCircles = () => {
  const circles = Array.from({ length: 10 }).map((_, i) => {
    const size = `${Math.floor(Math.random() * 6) + 3}px`;
    const left = `${Math.floor(Math.random() * 100)}%`;
    const duration = `${5 + Math.random() * 4}s`;
    const delay = `${Math.random() * 4}s`;
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
          animationDelay: delay,
          opacity,
        }}
      />
    );
  });

  return <div className="absolute inset-0 pointer-events-none z-0">{circles}</div>;
};

export default FallingCircles;
