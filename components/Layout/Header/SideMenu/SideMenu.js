"use client";

import React, { useEffect, useRef } from "react";
import styles from "./sideMenu.module.css";
import Link from "next/link";
import Social from "@/components/Layout/Social/Social";
import SideRoundedDiv from "@/components/Layout/Header/RoundedDiv/SideRoundedDiv";
import { usePathname } from "next/navigation";
import checkActiveNav from "@/hooks/checkActiveNav";

const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
];

function SideMenu({ isActive }) {
  const sideMenuRef = useRef(null);
  const mainRef = useRef(null);
  const pathname = usePathname();
  const linksRef = useRef([]);

  useEffect(() => {
    checkActiveNav(linksRef, links, pathname, styles);
  }, [pathname]);

  return (
    <main
      ref={mainRef}
      className={`${isActive ? styles.open : ""} ${styles.hideSideMenu}`}
    >
      <div ref={sideMenuRef} className={styles.wrap}>
        <div className={styles.rounded}>
          <SideRoundedDiv isActive={isActive} />
        </div>
        <div className={styles.sideMenuContainer}>
          <div className={styles.sideMenu}>
            <div className={styles.title}>
              <p className="secularOne">Navigations</p>
            </div>
            <div className={styles.links}>
              <ul>
                {links.map((link, index) => (
                  <li
                    ref={(el) => (linksRef.current[index] = el)}
                    className={styles.link}
                    key={link.name}
                  >
                    <Link className="secularOne" href={link.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.social}>
              <Social type="full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SideMenu;
