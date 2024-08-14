"use client";

import React, { useEffect, useRef } from "react";
import FlightForm from "@/components/Service_Page/Plane-ticket-page/FlightForm";
import VideoPlayer from "@/utils/VideoPlayer";
import styles from "./style.module.css";
import Image from "next/image";
import CardHolder from "@/utils/CardHolder";
import gsap from "@/hooks/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import revealElement from "@/hooks/revealElement";
import scrollTriggerTextAnimation from "@/hooks/scrollTriggerTextAnimation";
import textAnimation from "@/hooks/textAnimation";
import hopUpElement from "@/hooks/hopUpElement";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const tempData = {
  title: "NCN | Plane Ticket",
  description: "Plane Ticket Service of NCN",
};

const data = [
  {
    id: 1,
    location: "New Delhi",
    src: "/static/images/services/plane-ticket/delhi.jpg",
    from: "DHK",
    to: "DEL",
    fare: "196",
    tripType: "roundtrip",
  },
  {
    id: 2,
    location: "New York",
    src: "/static/images/services/plane-ticket/new-york.jpg",
    from: "DHK",
    to: "NYC",
    fare: "850",
    tripType: "oneway",
  },
  {
    id: 3,
    location: "London",
    src: "/static/images/services/plane-ticket/london.jpg",
    from: "DHK",
    to: "LON",
    fare: "720",
    tripType: "roundtrip",
  },
  {
    id: 4,
    location: "Sydney",
    src: "/static/images/services/plane-ticket/sydney.jpg",
    from: "DHK",
    to: "SYD",
    fare: "950",
    tripType: "oneway",
  },
  {
    id: 5,
    location: "Tokyo",
    src: "/static/images/services/plane-ticket/tokyo.jpg",
    from: "DHK",
    to: "TYO",
    fare: "680",
    tripType: "roundtrip",
  },
  {
    id: 6,
    location: "Paris",
    src: "/static/images/services/plane-ticket/paris.jpg",
    from: "DHK",
    to: "PAR",
    fare: "750",
    tripType: "oneway",
  },
  {
    id: 7,
    location: "Toronto",
    src: "/static/images/services/plane-ticket/toronto.jpg",
    from: "DHK",
    to: "YYZ",
    fare: "810",
    tripType: "roundtrip",
  },
  {
    id: 8,
    location: "Singapore",
    src: "/static/images/services/plane-ticket/singapore.jpg",
    from: "DHK",
    to: "SIN",
    fare: "340",
    tripType: "oneway",
  },
  {
    id: 9,
    location: "Kuala Lumpur",
    src: "/static/images/services/plane-ticket/kuala-lumpur.jpg",
    from: "DHK",
    to: "KUL",
    fare: "290",
    tripType: "roundtrip",
  },
  {
    id: 10,
    location: "Dubai",
    src: "/static/images/services/plane-ticket/dubai.jpg",
    from: "DHK",
    to: "DXB",
    fare: "520",
    tripType: "oneway",
  },
];

function Page() {
  const formContainer = useRef();
  const videoContainer = useRef();
  const container = useRef();
  const title = useRef();
  const mainTitle = useRef();
  const elementsRef = useRef([]);

  const adjustFormPosition = () => {
    if (!formContainer.current || !videoContainer.current) return;

    gsap.set(formContainer.current, {
      top: `calc(100% - ${formContainer.current.offsetHeight / 2}px)`,
      left: "50%",
      transform: "translate(-50%, 0%)",
    });

    gsap.set(videoContainer.current, {
      marginBottom: `${formContainer.current.offsetHeight / 2 + 100}px`,
    });
  };

  useGSAP(
    () => {
      textAnimation(mainTitle.current, "lines");
      hopUpElement(formContainer.current);
      scrollTriggerTextAnimation(title.current, "word", 0.005);
      revealElement(elementsRef, 0.1, { position: 100 });
    },
    { scope: container }
  );

  // useEffect(() => {
  //   // Run on component mount
  //   adjustFormPosition();

  //   // Run on window resize
  //   const handleResize = () => {
  //     adjustFormPosition();
  //   };
  //   window.addEventListener("resize", handleResize);

  //   // Clean up the event listener
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div ref={container} className="lato">
      <div className="container">
        <div ref={videoContainer} className={styles.videoContainer}>
          {/* <VideoPlayer
            controls={false}
            type={"video/mp4"}
            autoPlay={true}
            loop={true}
            muted={true}
            src="/static/videos/airplane.mp4"
          /> */}
          <h1
            data-scroll
            data-scroll-speed="0.15"
            ref={mainTitle}
            className="secularOne"
          >
            Book your tickets with reasonable value
          </h1>

          <div
            data-scroll
            data-scroll-speed="0.1"
            ref={formContainer}
            className={styles.planeForm}
          >
            <FlightForm />
          </div>
        </div>

        <div className={styles.flightLists}>
          <h1 ref={title} data-scroll data-scroll-speed="0.09">
            Get these <span className={styles.innerTittle}>Low</span> fare deals
            for your next trip
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
    </div>
  );
}

export default Page;

const Card = ({ refRef, index, data }) => {
  const { id, location, src, from, to, fare, tripType } = data;
  return (
    <div ref={(el) => (refRef.current[index] = el)} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image fill={true} src={src} alt={to} />
      </div>

      <div className={styles.details}>
        <div className={styles.left}>
          <h1>{location}</h1>
          <p>
            {from}-{to}
          </p>
          {tripType === "roundtrip" ? (
            <div>Sep 11 - Oct 10</div>
          ) : (
            <div>Nov 10</div>
          )}
        </div>
        <div className={styles.right}>
          <h1>USD {fare}$</h1>
          <p> {tripType}</p>
        </div>
      </div>
    </div>
  );
};
