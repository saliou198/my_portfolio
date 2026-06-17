import React from "react";

type BlurTextSnapshot = Record<string, unknown>;

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: BlurTextSnapshot;
  animationTo?: BlurTextSnapshot[];
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
}

export default function BlurText(props: BlurTextProps): React.JSX.Element;
