"use client";

import React, { useRef, useEffect } from "react";
import gsap from "@/hooks/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./services.module.css";

const allServices = [
  {
    title: "Pre-Arrival Assistance",
    service: [
      "Plane Ticket Booking (with additional fees)",
      "Room Rent Assistance (one-time fee)",
      "Airport Pickup (one-way or round-trip)",
      "Bank Account Setup",
      "Social Insurance Number (SIN) Assistance",
      "SIM Card Setup",
    ],
    speed: "0.08",
  },
  {
    title: "Academic and Career Support",
    service: [
      "Finding Job Assistance",
      "CV/Resume Writing Support",
      "Mock Interview Preparation",
    ],
    speed: "0.08",
  },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Services() {
  const title = useRef(null);
  const endTrigger = useRef(null);
  const allCards = useRef(null);

  useGSAP(() => {
    if (!title.current || !endTrigger.current || !allCards.current) return;

    const cards = gsap.utils.toArray(allCards.current.children);
    const cardGap = 30;
    const titleHeight = title.current.offsetHeight + 20;

    ScrollTrigger.create({
      trigger: title.current,
      start: "top top",
      endTrigger: endTrigger.current,
      end: "top bottom",
      pin: true,
      scrub: true,
    });

    cards.forEach((element, index) => {
      const triggerStart = `top top+=${titleHeight + cardGap * index}`;

      ScrollTrigger.create({
        trigger: element,
        start: triggerStart,
        endTrigger: endTrigger.current,
        end: "top bottom",
        pin: true,
        scrub: true,
      });

      gsap.to(element, {
        scale: 1 - (cards.length - index) * 0.025,
        scrollTrigger: {
          trigger: element,
          start: "center bottom",
          end: triggerStart,
          scrub: true,
        },
      });
    });
  }, [title, endTrigger, allCards]);

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.services} id="services">
          <div ref={title} className={styles.title}>
            Expert Guidance for a <span>Smoother</span> Transition
          </div>
          <div ref={allCards} className={styles.cards}>
            {allServices.map((serv) => (
              <Card
                key={serv.title}
                title={serv.title}
                service={serv.service}
                speed={serv.speed}
              />
            ))}
          </div>
        </div>
      </div>
      <div ref={endTrigger}></div>
    </main>
  );
}

export default Services;

const Card = ({ title, service, speed }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardWraper}>
        <div className={styles.serviceTitle}>{title}</div>
        <div className={styles.serviceList}>
          <ul>
            {service.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
