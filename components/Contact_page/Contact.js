"use client";

import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import Button from "@/utils/Button";
import gsap from "@/hooks/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import textAnimation from "@/hooks/textAnimation";
import revealElement from "@/hooks/revealElement";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Contact() {
  const textareaRef = useRef(null);
  const title = useRef();
  const container = useRef();
  const formContainer = useRef();
  const elementsRef = useRef([]);

  useEffect(() => {
    const textarea = textareaRef.current;

    const autoExpand = (field) => {
      field.style.height = "inherit";

      const computed = window.getComputedStyle(field);
      const height = field.scrollHeight;

      field.style.height = height + "px";
    };

    const handleInput = () => autoExpand(textarea);

    textarea.addEventListener("input", handleInput);

    return () => {
      textarea.removeEventListener("input", handleInput);
    };
  }, []);

  useGSAP(
    () => {
      textAnimation(title.current, "lines");
      elementsRef.current = Array.from(formContainer.current.children);

      revealElement(elementsRef, 0, { position: 100, duration: 0.4 });
    },
    { scope: container, dependencies: [elementsRef] }
  );

  return (
    <div ref={container}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 ref={title} className={`${styles.title} secularOne`}>
            Get in touch
          </h1>
          <form ref={formContainer}>
            <div>
              <input
                className={styles.nameInput}
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Full Name"
              />
            </div>
            <div>
              <input
                className={styles.emailInput}
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Email"
              />
            </div>
            <div>
              <textarea
                className={styles.messageInput}
                name="message"
                id="message"
                autoComplete="off"
                rows={1}
                cols={1}
                placeholder="Message"
                ref={textareaRef}
              ></textarea>
            </div>
            <div className={styles.button}>
              <Button name="Get in touch" url="#" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
