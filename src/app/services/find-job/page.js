import React from "react";
import styles from "./style.module.css";
import HeroSection from "@/utils/temporary-template/HeroSection";
import FAQ from "@/utils/FAQ";

const tempData = {
  title: "NCN | Find Job",
  description: "Find Job Service of NCN",
};

const faq = [
  {
    question: "What documents do I need to get started?",
    answer:
      "You will need an updated resume, a list of job preferences, and any professional references you may have.",
  },
  {
    question: "How long does it take to find a job?",
    answer:
      "The time it takes to find a job varies depending on your industry and job preferences. However, our service aims to expedite the process by providing targeted job matches and ongoing support.",
  },
  {
    question: "Can you help with interview preparation?",
    answer:
      "Yes, we offer comprehensive interview coaching to help you prepare for and excel in your job interviews.",
  },
  {
    question: "Are there any fees for your job assistance service?",
    answer:
      "Yes, there is a service fee for our job assistance, but we ensure transparent pricing with no hidden charges.",
  },
];

function page() {
  return (
    <div>
      <div className="container">
        <HeroSection
          title={"Find Your Dream Job with Ease"}
          desctiption={"Get Professional Assistance for Your Job Search"}
          cta={"Get Job Now"}
        />

        <FAQ data={faq} />
      </div>
    </div>
  );
}

export default page;
