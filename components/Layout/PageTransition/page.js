"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { text, curve, translate } from "./anim";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";

const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/services": "Services",
  "/services/plane-ticket": "Services",
  "/services/room-rent": "Services",
  "/services/airport-pickup": "Services",
  "/services/bank-account-setup": "Services",
  "/services/social-insurance-number": "Services",
  "/services/sim-card-setup": "Services",
  "/services/find-job": "Services",
  "/services/cv": "Services",
  "/services/mock-interview": "Services",
};

const getRouteName = (pathname) => {
  const routeKeys = Object.keys(routes);
  for (const route of routeKeys) {
    if (pathname === route) {
      return routes[route];
    }
  }
  return "404";
};

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children, backgroundColor }) {
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [pathname]);

  return (
    <div
      className={`${styles.curve} ${styles.page}`}
      style={{ backgroundColor }}
    >
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className={styles.background}
      />
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const pathname = usePathname();
  const routeName = getRouteName(pathname);

  const initialPath = `
        M0 ${width < height ? 100 : 300}
        Q${width / 2} 0 ${width} ${width < height ? 100 : 300}
        L${width} ${height + (width < height ? 400 : 300)}
        Q${width / 2} ${height + 600} 0 ${height + (width < height ? 400 : 300)}
        L0 0
    `;

  const targetPath = `
        M0 ${width < height ? 100 : 300}
        Q${width / 2} 0 ${width} ${width < height ? 100 : 300}
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg {...anim(translate)} width={width} height={height}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
      <motion.text
        x={width / 2}
        y={height}
        textAnchor="middle"
        alignmentBaseline="middle"
        className={`${styles.title} secularOne`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {routeName}
      </motion.text>
    </motion.svg>
  );
};
