import React from "react";
import styles from "./style.module.css";
import HeroSection from "@/utils/temporary-template/HeroSection";
import FAQ from "@/utils/FAQ";

const tempData = {
  title: "NCN | Mock Interview",
  description: "Mock Interview Service of NCN",
};

const faq = [
  {
    question: "What do I need to prepare for the mock interview?",
    answer:
      "You will need to provide an updated resume and the job description of the target role. It's also helpful to list any specific areas you'd like to focus on.",
  },
  {
    question: "How long is each mock interview session?",
    answer:
      "Each mock interview session typically lasts between 45 to 60 minutes, including time for feedback and discussion.",
  },
  {
    question: "Can I request industry-specific interview questions?",
    answer:
      "Yes, we tailor the interview questions to match the industry and role you are targeting.",
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
          title={"Ace Your Interviews with Mock Interview Preparation"}
          desctiption={"Practice, Prepare, and Succeed"}
          cta={"Book Your Mock Interview Now"}
        />

        <FAQ data={faq} />
      </div>
    </div>
  );
}

export default page;
