import React from "react";
import Link from "next/link";
import styles from "./social.module.css";

const socialList = [
  {
    name: "LinkedIn",
    shortName: "LI",
    link: "https://www.linkedin.com/in/nafiz-ahmed-0b0b0b1b6/",
  },
  {
    name: "Github",
    shortName: "GH",
    link: "https://github.com/nafizahmed",
  },
  {
    name: "Twitter",
    shortName: "TW",
    link: "https://twitter.com/nafizahmed1",
  },
  {
    name: "Instagram",
    shortName: "IG",
    link: "https://www.instagram.com/nafizahmed1/",
  },
];

function Social({ title, type, flex = "column" }) {
  return (
    <main>
      <div style={{ display: flex }} className={styles.container}>
        <div className={styles.title}>
          <span>{title}</span>
        </div>
        <div className={styles.icons}>
          {socialList.map((item) => {
            return (
              <Link className={styles.link} href={item.link} key={item.name}>
                <div className={styles.icon}>
                  <p>{type === "short" ? item.shortName : item.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Social;
