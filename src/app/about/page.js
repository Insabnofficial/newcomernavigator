import React from "react";
import { metadata } from "../layout";
import About from "@/components/About_page/About";

function page() {
  metadata.title = "NCN | About";

  return (
    <div>
      <About />
    </div>
  );
}

export default page;
