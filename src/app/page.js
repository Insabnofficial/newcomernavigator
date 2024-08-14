import Intro from "@/components/Landing_Page/Intro";
import Intro2 from "@/components/Landing_Page/intro2";
import About from "@/components/Landing_Page/About_section/About";
import styles from "./page.module.css";
import Services from "@/components/Landing_Page/Services_section/Services";
import ServicesOld from "@/components/Landing_Page/Services_section_old/Services";
import WhyUs from "@/components/Landing_Page/WhyUs_section/WhyUs";
import { metadata } from "./layout";

export default function Home() {
  metadata.title = "Newcomer Navigator";
  return (
    <main className={styles.main}>
      <Intro2 />
      <About />
      <Services />
      <WhyUs />
    </main>
  );
}
