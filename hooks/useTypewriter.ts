"use client";

import { useState, useEffect } from "react";

interface Phase {
  text: string;
  speed?: number; // ms per character
}

interface UseTypewriterResult {
  displayed: string[];   // one string per phase, current content
  phaseIndex: number;    // which phase is typing right now (-1 = all done)
  done: boolean;
}

export function useTypewriter(phases: Phase[], startDelay = 600): UseTypewriterResult {
  const [displayed, setDisplayed] = useState<string[]>(phases.map(() => ""));
  const [phaseIndex, setPhaseIndex] = useState(-2); // -2 = waiting, -1 = all done

  useEffect(() => {
    const timer = setTimeout(() => setPhaseIndex(0), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (phaseIndex < 0 || phaseIndex >= phases.length) return;

    const { text, speed = 55 } = phases[phaseIndex];
    const current = displayed[phaseIndex];
    if (current.length >= text.length) {
      // Phase complete — move to next after a short pause
      const timer = setTimeout(() => {
        setPhaseIndex((i) => i + 1);
      }, 300);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setDisplayed((prev) => {
        const next = [...prev];
        next[phaseIndex] = text.slice(0, current.length + 1);
        return next;
      });
    }, speed);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phaseIndex, displayed]);

  const done = phaseIndex >= phases.length;
  return { displayed, phaseIndex: done ? -1 : phaseIndex, done };
}
