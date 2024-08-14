"use client";

import React, { useRef } from "react";
import styles from "./style.module.css";
import gsap from "@/hooks/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import textAnimation from "@/hooks/textAnimation";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function About() {
  const container = useRef(null);
  useGSAP(
    () => {
      textAnimation(container.current);
    },
    { scope: container }
  );
  return (
    <div ref={container} className={`${styles.about} container secularOne`}>
      ABOUT
    </div>
  );
}

export default About;
