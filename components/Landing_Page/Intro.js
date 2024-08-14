"use client";

import React, { useLayoutEffect, useRef } from "react";
import styles from "./intro.module.css";
import Image from "next/image";
import gsap from "@/hooks/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Intro() {
  const background = useRef(null);

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       scrub: true,
  //       start: "top",
  //       end: "+=500px",
  //     },
  //   });

  //   timeline.fromTo(
  //     background.current,
  //     { clipPath: `inset(25%)` },
  //     { clipPath: `inset(0%)` }
  //   );
  // }, []);

  return (
    <div className={styles.homeHeader}>
      <div className={styles.backgroundImage} ref={background}>
        <Image
          src={"/static/images/intro.png"}
          fill={true}
          alt="background image"
          priority={true}
        />
      </div>

      <div className={`container ${styles.intro}`}>
        <h1 data-scroll data-scroll-speed="0.3">
          Empowering International Students: Your One-Stop Support Center
        </h1>
        <p data-scroll data-scroll-speed="0.2">
          Making your journey to studying abroad smooth and stress-free
        </p>
      </div>
    </div>
  );
}
