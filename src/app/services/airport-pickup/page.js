import React from "react";
import styles from "./style.module.css";
import HeroSection from "@/utils/temporary-template/HeroSection";
import FAQ from "@/utils/FAQ";

const tempData = {
  title: "NCN | Airport Pickup",
  description: "Airport Pickup Service of NCN",
};

const faq = [
  {
    question: "What happens if my flight is delayed?",
    answer:
      "We track your flight in real-time and adjust your pickup time accordingly.",
  },
  {
    question: "Where will I meet my driver at the airport?",
    answer:
      "Your driver will meet you at the arrivals gate, holding a sign with your name.",
  },
  {
    question: "Can I make a last-minute booking?",
    answer: "Yes, we accept last-minute bookings based on availability.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No, we believe in transparent pricing. The cost you see is what you pay.",
  },
];

function page() {
  return (
    <div>
      <div className="container">
        <HeroSection
          title={"Reliable Airport Pickup Service"}
          desctiption={"Get ready to be picked up in minutes"}
          cta={"Book Your Ride Now"}
        />

        <FAQ data={faq} />
      </div>
    </div>
  );
}

export default page;
