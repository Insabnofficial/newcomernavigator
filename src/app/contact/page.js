import React from "react";
import Contact from "@/components/Contact_page/Contact";
import styles from "./style.module.css";
import { metadata } from "../layout";

function page() {
  metadata.title = "NCN | Contact";
  return (
    <div>
      <Contact />
    </div>
  );
}

export default page;
