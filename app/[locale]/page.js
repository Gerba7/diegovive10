import styles from "./page.module.css";
import Cover from "../ui/components/Home/Cover/Cover";
import TheExperience from "../ui/components/Home/TheExperience/TheExperience";
import Data from "../ui/components/Home/Data/Data";
import Contact from "../ui/components/Home/Contact/Contact";
import Navbar from "../ui/components/Common/Navbar/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Cover />
      <TheExperience />
      <Data />
      <Contact />
    </main>
  );
}
