"use client";

import React, { useRef, useEffect } from "react";
import styles from "./services.module.css";
import Image from "next/image";
import Link from "next/link";
import revealElement from "@/hooks/revealElement";
import gsap from "@/hooks/gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const serviceList = [
  {
    id: 1,
    title: "Plane Ticket Booking (with additional fees)",
    description:
      "We offer a comprehensive plane ticket booking service to ensure your travel arrangements are smooth and convenient. Our team can help you find the best flights that suit your schedule and budget. Please note that this service includes additional fees for our assistance.",
    src: "/static/images/services/plane-ticket.webp",
    link: "plane-ticket",
  },
  {
    id: 2,
    title: "Room Rent Assistance (one-time fee)",
    description:
      "Finding a suitable place to live can be challenging, especially when relocating. Our room rent assistance service helps you secure accommodation before you arrive, ensuring you have a comfortable place to stay. This service incurs a one-time fee.",
    src: "/static/images/services/room-rent.webp",
    link: "room-rent",
  },
  {
    id: 3,
    title: "Airport Pickup (one-way or round-trip)",
    description:
      "Our airport pickup service provides you with a hassle-free transfer from the airport to your destination. You can choose between a one-way or round-trip service, and we’ll ensure a reliable and comfortable journey to start your stay off right.",
    src: "/static/images/services/waiting-area.webp",
    link: "airport-pickup",
  },
  {
    id: 4,
    title: "Bank Account Setup",
    description:
      "Navigating financial systems in a new country can be daunting. Our bank account setup service assists you in opening a local bank account, making your financial transactions and management more straightforward and efficient.",
    src: "/static/images/services/bank-setup.webp",
    link: "bank-account-setup",
  },
  {
    id: 5,
    title: "Social Insurance Number (SIN) Assistance",
    description:
      "Obtaining a Social Insurance Number (SIN) is essential for working and accessing government services. Our SIN assistance service guides you through the application process, ensuring you meet all requirements and submit the necessary documents correctly.",
    src: "/static/images/services/social-insurance.webp",
    link: "social-insurance-number",
  },
  {
    id: 6,
    title: "SIM Card Setup",
    description:
      "Stay connected from the moment you arrive with our SIM card setup service. We help you choose the best mobile plan and provider, and assist in getting your SIM card activated so you can immediately start using your phone.",
    src: "/static/images/services/sim-card.webp",
    link: "sim-card-setup",
  },
  {
    id: 7,
    title: "Finding Job Assistance",
    description:
      "Our job assistance service helps you navigate the local job market, identify opportunities, and connect with potential employers. We provide guidance and resources to enhance your job search and increase your chances of securing employment.",
    src: "/static/images/services/job-find.webp",
    link: "find-job",
  },
  {
    id: 8,
    title: "CV/Resume Writing Support",
    description:
      "A well-crafted CV or resume is crucial for making a positive impression on potential employers. Our support service offers professional advice and assistance in creating a standout CV or resume that highlights your skills and experiences effectively.",
    src: "/static/images/services/cv.webp",
    link: "cv",
  },
  {
    id: 9,
    title: "Mock Interview Preparation",
    description:
      "Prepare for your job interviews with our mock interview preparation service. We conduct practice interviews tailored to your industry, providing constructive feedback and tips to boost your confidence and improve your performance during actual interviews.",
    src: "/static/images/services/interview.webp",
    link: "mock-interview",
  },
];

function Services() {
  const elementsRef = useRef([]);
  const container = useRef(null);

  useGSAP(
    () => {
      revealElement(elementsRef, 0, { position: 100 });
    },
    { scope: container, dependencies: [elementsRef] }
  );

  return (
    <main ref={container} className={styles.mainContainer}>
      {serviceList.map((s, index) => (
        <Service refRef={elementsRef} index={index} key={s.id} data={s} />
      ))}
    </main>
  );
}

export default Services;

const Service = ({ refRef, index, data }) => {
  const { title, description, src, link } = data;
  return (
    <Link
      ref={(el) => (refRef.current[index] = el)}
      href={`/services/${link}`}
      className={`${styles.service}`}
    >
      <div className={styles.serviceImage}>
        <Image fill={true} src={src} alt={title} priority={true} />
      </div>
      <div className={`container ${styles.serviceDetails}`}>
        <div className={styles.serviceText}>
          <h1 className={`${styles.serviceTitle} secularOne`}>{title}</h1>
          <p className={styles.serviceDescription}>{description}</p>
        </div>
        <div className={styles.arrow}>
          <span>&#8594;</span>
        </div>
      </div>
    </Link>
  );
};
