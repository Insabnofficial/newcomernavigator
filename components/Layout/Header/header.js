"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "@/components/Layout/Header/Hamburger/hamburger";
import SideMenu from "@/components/Layout/Header/SideMenu/SideMenu";
import gsap from "@/hooks/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import checkActiveNav from "@/hooks/checkActiveNav";
import Logo from "@/components/Logo/Logo";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

function Header() {
  const [isActive, setIsActive] = useState(false);
  const container = useRef(null);
  const pathname = usePathname();
  const linksRef = useRef([]);

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       container.current,
  //       { y: "-100%", opacity: 0 },
  //       { y: 0, opacity: 1, ease: "elastic.out", delay: 0.2 }
  //     );
  //   },
  //   { scope: container, dependencies: [pathname] }
  // );

  useEffect(() => {
    checkActiveNav(linksRef, menus, pathname, styles);
  }, [pathname]);

  return (
    <main ref={container} className={styles.animation}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}>
            <Link href="/">
              <Logo color={"var(--primary-color)"} />
            </Link>
          </div>
          <div className={styles.menu}>
            <ul>
              {menus.map((menu, index) => (
                <li
                  ref={(el) => (linksRef.current[index] = el)}
                  className={styles.links}
                  key={menu.name}
                >
                  <Link href={menu.link}>{menu.name}</Link>
                </li>
              ))}
            </ul>
            <div className={styles.navBar}>
              <Hamburger isActive={isActive} setIsActive={setIsActive} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sideMenu}>
        <SideMenu isActive={isActive} />
      </div>
    </main>
  );
}

export default Header;
