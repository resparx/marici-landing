'use client'
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const FadeInAnimation = ({
  children,
  direction = '',
  delay = 0,
  ...props
}) => {
  let compRef = useRef(null);
  const distance = 200;
  let fadeDirection : any;
  switch (direction) {
    case "left":
      fadeDirection = { x: -distance };
      break;
    case "right":
      fadeDirection = { x: distance };
      break;
    case "up":
      fadeDirection = { y: distance };
      break;
    case "down":
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }
  useEffect(() => {
    gsap.from(compRef.current, 1, {
      ...fadeDirection,
      opacity: 0,
      delay
    });
  }, [compRef, fadeDirection, delay]);
  return (
    <div ref={compRef} {...props}>
      {children}
    </div>
  );
};

export default FadeInAnimation;
