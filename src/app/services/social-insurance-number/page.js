import React from "react";
import styles from "./style.module.css";
import HeroSection from "@/utils/temporary-template/HeroSection";
import FAQ from "@/utils/FAQ";

const tempData = {
  title: "NCN | Social Insurance Number",
  description: "Social Insurance Number Service of NCN",
};

const faq = [
  {
    question: "What documents do I need to apply for a SIN?",
    answer:
      "You will need a birth certificate or proof of birth, proof of immigration status (if applicable), a government-issued ID, and a completed application form.",
  },
  {
    question: "How long does it take to get a SIN?",
    answer:
      "The process typically takes a few weeks, but we strive to expedite it as much as possible with our assistance.",
  },
  {
    question: "Can I apply for a SIN if I am not a citizen?",
    answer:
      "Yes, non-citizens can apply for a SIN, but additional documentation will be required.",
  },
  {
    question: "Is there a fee for your assistance service?",
    answer:
      "Yes, there is a service fee for our assistance, but we ensure transparent pricing with no hidden charges.",
  },
];

function page() {
  return (
    <div>
      <div className="container">
        <HeroSection
          title={"Social Insurance Number Assistance"}
          desctiption={"Get Your SIN Easily and Securely"}
          cta={"Apply for SIN Assistance Now"}
        />

        <FAQ data={faq} />
      </div>
    </div>
  );
}

export default page;
