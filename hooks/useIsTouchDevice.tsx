"use client"

import { useState, useEffect } from "react";

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || 
                     navigator.maxTouchPoints > 0 || 
                     window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(hasTouch);
  }, []);

  return isTouch;
}
