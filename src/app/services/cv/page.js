import React from "react";
import styles from "./style.module.css";
import HeroSection from "@/utils/temporary-template/HeroSection";
import FAQ from "@/utils/FAQ";

const tempData = {
  title: "NCN | CV/Resume Writing",
  description: "CV/Resume Writing Service of NCN",
};

const faq = [
  {
    question: "What information do I need to provide for resume writing?",
    answer:
      "You will need to provide your current resume (if available), career goals, job preferences, and any relevant job descriptions.",
  },
  {
    question: "How long does it take to receive my professional resume?",
    answer:
      "The turnaround time for a professional resume is typically 3-5 business days. We also offer expedited services for urgent requests.",
  },
  {
    question: "Can you help with cover letter writing?",
    answer:
      "Yes, we offer cover letter writing support as part of our resume writing services.",
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
          title={"Professional CV/Resume Writing"}
          desctiption={"Stand Out and Secure Your Dream Job"}
          cta={"Get Started"}
        />

        <FAQ data={faq} />
      </div>
    </div>
  );
}

export default page;
