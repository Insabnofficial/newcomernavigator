"use client";

import React, { useRef } from "react";
import styles from "./services.module.css";
import Link from "next/link";
import gsap from "@/hooks/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import textAnimation from "@/hooks/textAnimation";
import scrollTriggerTextAnimation from "@/hooks/scrollTriggerTextAnimation";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const allServices = [
  {
    title: "Pre-Arrival Assistance",
    service: [
      {
        title: "Plane Ticket Booking (with additional fees)",
        url: "/services/plane-ticket",
      },
      {
        title: "Room Rent Assistance (one-time fee)",
        url: "/services/room-rent",
      },
      {
        title: "Airport Pickup (one-way or round-trip)",
        url: "/services/airport-pickup",
      },
      {
        title: "Bank Account Setup",
        url: "/services/bank-account-setup",
      },
      {
        title: "Social Insurance Number (SIN) Assistance",
        url: "/services/social-insurance-number",
      },
      {
        title: "SIM Card Setup",
        url: "/services/sim-card-setup",
      },
    ],
  },
  {
    title: "Academic and Career Support",
    service: [
      {
        title: "Finding Job Assistance",
        url: "/services/find-job",
      },
      {
        title: "CV/Resume Writing Support",
        url: "/services/cv",
      },
      {
        title: "Mock Interview Preparation",
        url: "/services/mock-interview",
      },
    ],
  },
];

function Services() {
  const title = useRef(null);
  const container = useRef(null);

  useGSAP(
    () => {
      scrollTriggerTextAnimation(title.current, "words");
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={`${styles.title} secularOne`}>
            <h1 data-scroll data-scroll-speed="0.1" ref={title}>
              Our Services
            </h1>
          </div>

          <div className={styles.services}>
            {allServices.map((serv) => (
              <Card
                key={serv.title}
                title={serv.title}
                service={serv.service}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

const Card = ({ title, service, speed }) => {
  const container = useRef(null);

  useGSAP(
    () => {
      const elements = container.current.querySelectorAll("li");

      gsap.fromTo(
        elements,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elements,
            start: "top 90%",
            end: "bottom 30%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        container.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: container.current,
            start: "top 95%",
            end: "bottom 85%",
            scrub: true,
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className={styles.card}>
      <div className={styles.serviceTitle}>{title}</div>
      <div className={styles.cardWraper}>
        <div className={styles.serviceList}>
          <ul>
            {service.map((s, index) => (
              <li key={s.title}>
                <Link href={s.url}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
