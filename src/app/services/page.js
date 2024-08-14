import React from "react";
import styles from "./service.module.css";
import Intro from "@/components/Service_Page/Intro";
import Services from "@/components/Service_Page/Services_section/Services";
import FAQ from "@/utils/FAQ";
import { metadata } from "../layout";

const faq = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of services including airport pickup, bank account setup, social insurance number assistance, SIM card setup, job assistance, CV/resume writing support, and mock interview preparation.",
  },
  {
    question: "How do I book a service?",
    answer:
      "You can book a service by visiting our website, selecting the desired service, and filling out the online application form. Our team will contact you to confirm the booking and provide further instructions.",
  },
  {
    question: "What documents do I need to provide for your services?",
    answer:
      "The required documents vary depending on the service. Typically, you may need to provide identification documents, proof of address, and other relevant information. Please refer to the specific service page for detailed requirements.",
  },
  {
    question: "Are your services available nationwide?",
    answer:
      "Yes, our services are available nationwide. We strive to provide assistance in various locations to ensure convenience for our customers.",
  },
  {
    question: "What is the cost of your services?",
    answer:
      "The cost of our services varies depending on the type of service and specific requirements. Please visit the relevant service page for detailed pricing information or contact our customer support for a quote.",
  },
  {
    question: "How long does it take to complete a service?",
    answer:
      "The duration of each service varies. For example, airport pickup is immediate, while bank account setup and job assistance may take a few days to weeks. Please refer to the specific service page for estimated timeframes.",
  },
  {
    question: "Can I reschedule or cancel a service booking?",
    answer:
      "Yes, you can reschedule or cancel a service booking. Please contact our customer support team as soon as possible to make the necessary arrangements. Cancellation policies may apply.",
  },
  {
    question: "Do you offer any guarantees for your services?",
    answer:
      "We are committed to providing high-quality services and customer satisfaction. If you have any concerns or issues, please contact our customer support team, and we will work to resolve them promptly.",
  },
  {
    question: "How can I contact your customer support?",
    answer:
      "You can contact our customer support via phone, email, or live chat. Visit our Contact Us page for detailed contact information.",
  },
  {
    question: "Do you offer services in languages other than English?",
    answer:
      "Yes, we offer services in multiple languages to accommodate our diverse clientele. Please specify your preferred language when booking a service, and we will do our best to assist you accordingly.",
  },
];

function page() {
  metadata.title = "NCN | Services";
  return (
    <div>
      <Intro />
      <Services />
      <FAQ data={faq} />
    </div>
  );
}

export default page;
