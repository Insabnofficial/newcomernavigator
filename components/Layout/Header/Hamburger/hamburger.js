"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./hamburger.module.css";
import { usePathname } from "next/navigation";

function page({ isActive, setIsActive }) {
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  const handleClick = (e) => {
    e.preventDefault();
    e.target.classList.toggle(`${styles.active}`);
    setIsActive(!isActive);
  };

  return (
    <div className={styles.hamburgerContainer}>
      <div className={`${styles.hamburger}`}>
        <div
          onClick={handleClick}
          className={`${styles.line} ${isActive ? styles.active : ""}`}
        ></div>
      </div>
    </div>
  );
}

export default page;
