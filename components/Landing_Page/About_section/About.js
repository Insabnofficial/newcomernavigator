"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "./about.module.css";
import Social from "@/components/Layout/Social/Social";
import scrollTriggerTextAnimation from "@/hooks/scrollTriggerTextAnimation";
import gsap from "@/hooks/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function About() {
  return (
    <main className={styles.main}>
      <div className={`container`}>
        <SplitLayout
          imageSrc="/static/images/about-section.jpg"
          text="At Newcomer Navigator, we understand the excitement and challenges
            that come with embarking on an international education. We're here
            to support you every step of the way, offering comprehensive range
            of services designed to make your transition seamless."
        />
      </div>
    </main>
  );
}

export default About;

const SplitLayout = ({ imageSrc, text }) => {
  const container = useRef(null);
  const title = useRef(null);
  const para = useRef(null);
  const image = useRef(null);

  useGSAP((context, contextSafe) => {
    if (!title) return;

    ScrollTrigger.create({
      trigger: image.current,
      start: "top bottom",
      scrub: true,
      onEnter: () => {
        gsap.fromTo(
          image.current,
          {
            y: "100%",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "sin.out",
            duration: 1.1,
          }
        );
      },
    });

    scrollTriggerTextAnimation(title.current, "words");
    scrollTriggerTextAnimation(para.current, "words", 0.01, 0.5);
  }),
    { scope: container };

  return (
    <div ref={container} className={styles.splitLayout}>
      <div ref={image} className={styles.imageContainer}>
        <Image
          data-scroll
          data-scroll-speed="0.1"
          src={imageSrc}
          alt="Image for Split Layout"
          fill
          className={styles.parallaxImage}
        />
      </div>
      <div className={styles.textContainer}>
        <h1
          className="secularOne"
          ref={title}
          data-scroll
          data-scroll-speed="0.15"
        >
          About Us
        </h1>
        <p ref={para} data-scroll data-scroll-speed="0.1">
          {text}
        </p>
        <div data-scroll data-scroll-speed="0.08" className={styles.social}>
          <Social type="short" title="Follow Us On" />
        </div>
      </div>
    </div>
  );
};
