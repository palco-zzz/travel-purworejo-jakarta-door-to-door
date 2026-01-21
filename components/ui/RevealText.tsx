import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealTextProps {
  children: string;
  className?: string; // Applied to the inner text element
  wrapperClassName?: string; // Applied to the outer mask element
  delay?: number;
  width?: "fit-content" | "100%";
}

export const RevealText = ({
  children,
  className = "",
  wrapperClassName = "",
  delay = 0.25,
  width = "fit-content",
}: RevealTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants: { [key: string]: Variant } = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: delay,
      },
    },
  };

  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
      className={wrapperClassName}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};
