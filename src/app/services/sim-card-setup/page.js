import React from "react";
import styles from "./style.module.css";
import HeroSection from "@/utils/temporary-template/HeroSection";
import FAQ from "@/utils/FAQ";

const tempData = {
  title: "NCN | SIM Card Setup",
  description: "SIM Card Setup Service of NCN",
};

const faq = [
  {
    question: "What documents do I need to set up a SIM card?",
    answer:
      "You will need a government-issued ID, proof of address, and a completed application form.",
  },
  {
    question: "How long does it take to activate my SIM card?",
    answer:
      "The activation process typically takes a few minutes to a few hours. You will receive a confirmation once your SIM card is active.",
  },
  {
    question: "Can I keep my existing phone number?",
    answer:
      "Yes, you can port your existing phone number to our service. Please provide your current phone number and carrier details during the application process.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No, we believe in transparent pricing. The cost you see is what you pay, with no hidden fees.",
  },
];

function page() {
  return (
    <div>
      <div className="container">
        <HeroSection
          title={"Easy SIM Card Setup"}
          desctiption={"Stay Connected with Our Hassle-Free Service"}
          cta={"Get Your SIM Card Now"}
        />

        <FAQ data={faq} />
      </div>
    </div>
  );
}

export default page;
