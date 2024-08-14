"use client";

import React, { useEffect, useRef } from "react";
import styles from "./intro2.module.css";
import Image from "next/image";
import gsap from "@/hooks/gsap";
import { useGSAP } from "@gsap/react";
import textAnimation from "@/hooks/textAnimation";
import hopUpElement from "@/hooks/hopUpElement";

gsap.registerPlugin(useGSAP);

export default function Intro2() {
  const background1 = useRef(null);
  const background2 = useRef(null);
  const background3 = useRef(null);
  const container = useRef(null);
  const title = useRef(null);
  const mouse = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      // const floatAnimation = contextSafe((element, distance, duration) => {
      //   gsap.to(element, {
      //     y: distance,
      //     duration: duration,
      //     repeat: -1,
      //     yoyo: true,
      //     ease: "sine.inOut",
      //   });
      // });

      const tl = textAnimation(title.current);

      tl.fromTo(
        background1.current,
        { x: "-=100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4 }
      )
        .fromTo(
          background3.current,
          { x: "+=100%", opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          "-=.8"
        )
        .fromTo(
          background2.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6 },
          "-=.6"
        )
        .fromTo(
          mouse.current,
          { opacity: 0, x: "-100%" },
          { opacity: 1, duration: 0.3, x: 0 },
          "-=.4"
        );

      // floatAnimation(background1.current, 20, 3);
      // floatAnimation(background2.current, -15, 4);
      // floatAnimation(background3.current, 25, 3.5);
    },
    { scope: container }
  );

  return (
    <div ref={container} className={styles.homeHeader}>
      <div className={`container ${styles.intro}`}>
        <h1
          ref={title}
          className="secularOne"
          data-scroll
          data-scroll-speed="0.3"
          id="textAnimation"
        >
          Empowering International Students: Your One-Stop Support Center
        </h1>
        <div
          className={`${styles.backgroundImage1} ${styles.backgroundImage}`}
          ref={background1}
        >
          <Image
            data-scroll
            data-scroll-speed="0.15"
            width={450}
            height={290}
            src={"/static/images/intro1.png"}
          />
        </div>

        <div
          className={`${styles.backgroundImage2} ${styles.backgroundImage}`}
          ref={background2}
        >
          <Image
            data-scroll
            data-scroll-speed="0.2"
            width={450}
            height={290}
            src={"/static/images/intro2.png"}
          />
        </div>

        <div
          className={`${styles.backgroundImage3} ${styles.backgroundImage}`}
          ref={background3}
        >
          <Image
            data-scroll
            data-scroll-speed="0.5"
            width={450}
            height={290}
            src={"/static/images/intro3.png"}
          />
        </div>

        <div
          data-scroll
          data-scroll-speed="0.8"
          ref={mouse}
          className={`${styles.mouse}`}
        >
          <span></span>
        </div>
      </div>
    </div>
  );
}
