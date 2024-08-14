"use client";

import React, { useState, useRef } from "react";
import styles from "./whyus.module.css";
import Image from "next/image";
import gsap from "@/hooks/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import textAnimation from "@/hooks/textAnimation";
import revealElement from "@/hooks/revealElement";
import scrollTriggerTextAnimation from "@/hooks/scrollTriggerTextAnimation";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const data = [
  {
    id: "01",
    title: "Save Time and Money",
    description:
      "Our bundled packages offer significant savings compared to purchasing individual services.",
    src: "/static/images/deposit.png",
  },
  {
    id: "02",
    title: "Reduce Stress",
    description:
      " We take care of the logistics, allowing you to focus on academics and settling into your new environment.",
    src: "/static/images/stress-relief.png",
  },
  {
    id: "03",
    title: "Peace of Mind",
    description:
      "Our experienced staff is here to answer your questions and guide you through the process.",
    src: "/static/images/philosophy.png",
  },
];

function WhyUs() {
  const background = useRef(null);
  const title = useRef(null);
  const cards = useRef(null);
  const elementsRef = useRef([]);

  useGSAP(
    () => {
      scrollTriggerTextAnimation(title.current);
      elementsRef.current = Array.from(cards.current.children);
      revealElement(elementsRef);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: background.current,
          scrub: true,
          start: "center bottom",
          end: "bottom center",
        },
      });

      timeline.fromTo(
        background.current,
        { background: "linear-gradient(to top, #ffffff,#ffffff, #ffffff)" },
        {
          background:
            "linear-gradient(to top, rgb(235, 234, 235),rgb(235, 234, 235), #ffffff)",
        }
      );
    },
    { scope: background }
  );

  return (
    <main ref={background} className={styles.main}>
      <div className="container">
        <div className={styles.whyus}>
          <h1
            ref={title}
            className="secularOne"
            data-scroll
            data-scroll-speed="0.07"
          >
            Why Choose Us?
          </h1>
          <div ref={cards} className={styles.cards}>
            {data.map((card) => (
              <Card key={card.id} data={card} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default WhyUs;

const Card = ({ data }) => {
  const { id, title, description, src } = data;
  const container = useRef(null);

  return (
    <div ref={container} className={styles.card}>
      <div
        data-scroll
        data-scroll-speed="0.020"
        className={styles.cardContainer}
      >
        <div className={styles.cardIcon}>
          <Image src={src} width={100} height={100} />
        </div>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardDescription}>{description}</div>
      </div>
    </div>
  );
};
