"use client";

import React, { useRef } from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import Social from "@/components/Layout/Social/Social";
import gsap from "@/hooks/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import revealElement from "@/hooks/revealElement";
import scrollTriggerTextAnimation from "@/hooks/scrollTriggerTextAnimation";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AllLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Others = [
  {
    name: "Destination Guides",
    link: "/destination-guides",
  },
  {
    name: "Student Testimonials",
    link: "/student-testimonials",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
];

function Footer() {
  const elementsRef = useRef([]);
  const topRef = useRef();
  const container = useRef();

  useGSAP(
    () => {
      if (topRef.current) {
        elementsRef.current = Array.from(topRef.current.children);
        revealElement(elementsRef, 0, { position: 100, duration: 0.4 });
      }
    },
    { scope: container }
  );

  return (
    <main ref={container}>
      <div className="container">
        <div className={styles.footer}>
          <div ref={topRef} className={styles.top}>
            <div style={{ opacity: 0 }}>
              <Link href="/">
                <Image
                  width={90}
                  height={40}
                  src="/static/images/logo.svg"
                  alt="logo"
                />
              </Link>
            </div>
            <LinkModal title="All Links" data={AllLinks} />
            <LinkModal title="Others" data={Others} />
            <GetStarted />
          </div>
          <div className={styles.bottom}>
            <p className={styles.copyright}>
              Copyright © 2024 Newcomer Navigator
            </p>
            <Social type="full" />
            <p className={styles.copyright2}>
              Copyright © 2024 Newcomer Navigator
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Footer;

const LinkModal = ({ title, data }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.linkTitle}>{title}</div>
        <div className={styles.modalLink}>
          {data.map((link) => {
            return (
              <Link key={link.name} href={link.link}>
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const GetStarted = () => {
  return (
    <div className={styles.getStarted}>
      <h3>Get started today!</h3>
      <p>
        Contact us today for a free consultation and let us help you make the
        most of your international student experience
      </p>
      <div>Get started</div>
    </div>
  );
};
