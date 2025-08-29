import {useEffect, useRef, useState} from "react";
import type {RefObject} from "react";

/**
 * useInView - Custom hook to detect if an element is in the viewport
 * @param {Object} options - IntersectionObserver options
 * @returns [ref, inView]
 */
export function useInView(options?: IntersectionObserverInit): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let hasBeenInView = false;
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        hasBeenInView = true;
        observer.disconnect(); // Stop observing after first in-view
      } else if (!hasBeenInView) {
        setInView(false);
      }
    }, options);
    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return [ref, inView];
}
