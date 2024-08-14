"use client";

import React, { useRef } from "react";
import styles from "./style.module.css";
import DatePicker from "@/utils/DatePicker";
import handleDividers from "@/hooks/handleDividers";
import Image from "next/image";
import Traveller from "@/utils/Traveller";
import CardHolder from "@/utils/CardHolder";
import gsap from "@/hooks/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import revealElement from "@/hooks/revealElement";
import scrollTriggerTextAnimation from "@/hooks/scrollTriggerTextAnimation";
import textAnimation from "@/hooks/textAnimation";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const tempData = {
  title: "NCN | Room Rent",
  description: "Room Rent Service of NCN",
};

const data = [
  {
    id: "1",
    title: "Toronto",
    description: "1 bed, 2 baths, 1,200 sqft",
    src: "/static/images/services/room-rent/toronto.jpg",
    from: "2022-11-01",
    to: "2022-11-10",
    price: "48",
    ratings: 4.5,
  },
  {
    id: "2",
    title: "Vancouver",
    description: "2 beds, 1 bath, 950 sqft",
    src: "/static/images/services/room-rent/vancouver.jpg",
    from: "2022-12-01",
    to: "2022-12-10",
    price: "55",
    ratings: 4.7,
  },
  {
    id: "3",
    title: "Montreal",
    description: "3 beds, 2 baths, 1,500 sqft",
    src: "/static/images/services/room-rent/montreal.jpg",
    from: "2023-01-15",
    to: "2023-01-25",
    price: "60",
    ratings: 4.6,
  },
  {
    id: "4",
    title: "Calgary",
    description: "2 beds, 1 bath, 1,100 sqft",
    src: "/static/images/services/room-rent/calgary.jpg",
    from: "2023-02-01",
    to: "2023-02-10",
    price: "52",
    ratings: 4.4,
  },
  {
    id: "5",
    title: "Ottawa",
    description: "1 bed, 1 bath, 800 sqft",
    src: "/static/images/services/room-rent/ottawa.jpg",
    from: "2023-03-01",
    to: "2023-03-10",
    price: "45",
    ratings: 4.3,
  },
  {
    id: "6",
    title: "Edmonton",
    description: "3 beds, 2 baths, 1,300 sqft",
    src: "/static/images/services/room-rent/edmonton.jpg",
    from: "2023-04-01",
    to: "2023-04-10",
    price: "58",
    ratings: 4.6,
  },
  {
    id: "7",
    title: "Winnipeg",
    description: "2 beds, 1 bath, 1,000 sqft",
    src: "/static/images/services/room-rent/winnipeg.jpg",
    from: "2023-05-01",
    to: "2023-05-10",
    price: "50",
    ratings: 4.5,
  },
  {
    id: "8",
    title: "Quebec City",
    description: "1 bed, 1 bath, 750 sqft",
    src: "/static/images/services/room-rent/quebec-city.jpg",
    from: "2023-06-01",
    to: "2023-06-10",
    price: "47",
    ratings: 4.4,
  },
  {
    id: "9",
    title: "Halifax",
    description: "2 beds, 2 baths, 1,200 sqft",
    src: "/static/images/services/room-rent/halifax.jpg",
    from: "2023-07-01",
    to: "2023-07-10",
    price: "53",
    ratings: 4.5,
  },
  {
    id: "10",
    title: "Victoria",
    description: "3 beds, 2 baths, 1,400 sqft",
    src: "/static/images/services/room-rent/victoria.jpg",
    from: "2023-08-01",
    to: "2023-08-10",
    price: "62",
    ratings: 4.7,
  },
];

function page() {
  const container = useRef();
  const title = useRef();
  const title2 = useRef();
  const elementsRef = useRef([]);
  const formContainer = useRef();

  const handleMouseEnter = (e) => {
    const target = e.target.closest("[data-index]");
    if (target) {
      handleDividers(target);
    }
  };

  const handleMouseLeave = (e) => {
    const target = e.target.closest("[data-index]");
    if (target) {
      const index = target.getAttribute("data-index");

      if (index !== "4") {
        target.classList.add("divider");
      }

      const previousDivider = document.querySelector(
        `[data-index="${index - 1}"]`
      );
      previousDivider?.classList.add("divider");
    }
  };

  useGSAP(
    () => {
      // GSAP Animations
      scrollTriggerTextAnimation(title2.current, "word", 0.005);
      const tl = textAnimation(title.current, "word", 0.005);
      tl.fromTo(
        formContainer.current,
        { opacity: 0, scale: 1.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out",
        }
      );

      revealElement(elementsRef, 0.1, { position: 100 });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div className="container">
        <div data-scroll data-scroll-speed="0.1">
          <h1 ref={title} className={`${styles.title} secularOne`}>
            Your Guide to the Perfect Rental Home
          </h1>
        </div>
        <div data-scroll data-scroll-speed="0.07">
          <form ref={formContainer} className={styles.form}>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              data-index={1}
              className={`${styles.where} divider`}
            >
              <input type="text" placeholder="where?" />
            </div>
            <div className={`${styles.dates}`}>
              <DatePicker
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                indexStart={2}
                variants={2}
                selectionType="range"
              />
            </div>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={styles.guests}
              data-index={4}
            >
              <Traveller varient={2} />
            </div>
            <div className={styles.button}>
              <button type="submit" onClick={(e) => e.preventDefault()}>
                &#8981;
              </button>
            </div>
          </form>
        </div>
        <h1 ref={title2} className={styles.cardsTitle}>
          Popular Rooms
        </h1>
        <CardHolder>
          {data.map((item, index) => (
            <Card
              refRef={elementsRef}
              index={index}
              key={item.id}
              data={item}
            />
          ))}
        </CardHolder>
      </div>
    </div>
  );
}

export default page;

const Card = ({ refRef, index, data }) => {
  return (
    <div
      ref={(el) => (refRef.current[index] = el)}
      className={styles.cardContainer}
    >
      <div className={styles.cardImage}>
        <Image src={data.src} alt={data.alt} fill={true} />
      </div>

      <div className={styles.cardText}>
        <div className={styles.left}>
          <h3 className={styles.cardTitle}>Room in {data.title}</h3>
          <p className={styles.cardDescription}>{data.description}</p>
          <p className={styles.cardDate}>
            {data.from} - {data.to}
          </p>
          <p className={styles.cardPrice}>
            <span>${data.price}</span>/night
          </p>
        </div>

        <div className={styles.right}>
          <p>
            <span>&#9733;</span>
            {data.ratings}
          </p>
        </div>
      </div>
    </div>
  );
};
