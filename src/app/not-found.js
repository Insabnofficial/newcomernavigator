"use client";

import React, { useRef } from "react";
import gsap from "@/hooks/gsap";
import textAnimation from "@/hooks/textAnimation";
import { useGSAP } from "@gsap/react";

const tempData = {
  title: "404 | Page Not Found",
  description: "Page Could Not Be Found",
};

function Custom404() {
  const title = useRef(null);

  useGSAP(
    () => {
      textAnimation(title.current, "lines");
    },
    { scope: title }
  );
  return (
    <div ref={title} className="error-404 secularOne">
      404 | Page Not Found
    </div>
  );
}

export default Custom404;
