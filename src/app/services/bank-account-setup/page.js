import React from "react";
import styles from "./style.module.css";
import HeroSection from "@/utils/temporary-template/HeroSection";
import FAQ from "@/utils/FAQ";

const tempData = {
  title: "NCN | Bank Account Setup",
  description: "Bank Account Setup Service of NCN",
};

const faq = [
  {
    question: "What documents do I need to set up an account?",
    answer:
      "You will need a government-issued ID, proof of address, and your Social Security Number or Tax ID.",
  },
  {
    question: "How long does it take to set up an account?",
    answer:
      "The process typically takes a few minutes to complete, and you will receive your account details immediately after approval.",
  },
  {
    question: "Can I open an account if I am not a resident?",
    answer:
      "Yes, non-residents can open an account, but additional documentation may be required.",
  },
  {
    question: "Are there any fees associated with opening an account?",
    answer:
      "No, there are no fees for opening a standard account. Some specialized accounts may have associated fees.",
  },
];

function page() {
  return (
    <div>
      <div className="container">
        <HeroSection
          title={"Easy Bank Account Setup"}
          desctiption={"Open Your Account in Minutes"}
          cta={"Get Started Now"}
        />

        <FAQ data={faq} />
      </div>
    </div>
  );
}

export default page;
