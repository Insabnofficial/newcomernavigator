"use client";

import React, { useRef } from "react";
import styles from "./intro.module.css";
import gsap from "@/hooks/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import scrollTriggerTextAnimation from "@/hooks/scrollTriggerTextAnimation";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Intro() {
  const container = useRef(null);
  const title = useRef(null);
  const para = useRef(null);
  const divider = useRef(null);

  useGSAP((context, contextSafe) => {
    if (!title) return;
    scrollTriggerTextAnimation(title.current, "lines");
    scrollTriggerTextAnimation(para.current, "lines", 0.07, 0.4);
    gsap.fromTo(
      divider.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
  }),
    { scope: container };

  return (
    <main ref={container}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={`${styles.title}`}>
            <h1 ref={title} className="secularOne">
              Our Company service!
            </h1>
          </div>
          <div ref={divider} className={styles.divider}></div>
          <div className={styles.details}>
            <p ref={para}>
              We offer a comprehensive range of services designed to make your
              transition smooth and successful. From pre-arrival assistance to
              academic and career support, our goal is to ensure you have
              everything you need for a seamless experience.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Intro;
