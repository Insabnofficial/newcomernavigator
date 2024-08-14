import React, { useEffect, useRef } from "react";
import gsap from "@/hooks/gsap";
import styles from "./sideRoundedDiv.module.css";

function RoundedDiv({ isActive }) {
  const circleRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      gsap.to(circleRef.current, {
        width: "0",
        duration: 0.6,
        ease: [0.7, 0, 0.2, 1],
      });
    } else {
      gsap.to(circleRef.current, {
        width: "8vw",
        duration: 0.6,
        ease: [0.7, 0, 0.2, 1],
      });
    }
  }, [isActive]);

  return (
    <div ref={circleRef} className={styles.circleContainer}>
      <div className={styles.circle}></div>
    </div>
  );
}

export default RoundedDiv;
