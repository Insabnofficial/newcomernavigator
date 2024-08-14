"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Layout/Header/header";
import Footer from "@/components/Layout/Footer/Footer";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Curve from "@/components/Layout/PageTransition/page";

function Layout({ children, title = "NCN" }) {
  const pathname = usePathname();

  const initializeScroll = async () => {
    const LocomotiveScroll = (await import("locomotive-scroll")).default;
    const locomotiveScroll = new LocomotiveScroll({});
  };

  // Add scroll magic setup
  useEffect(() => {
    setTimeout(() => {
      initializeScroll();
    }, 2000);
  }, [pathname]);

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Curve key={pathname}>{children}</Curve>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default Layout;
