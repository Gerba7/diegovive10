import styles from "./page.module.css";
import Cover from "../ui/components/Home/Cover/Cover";
import TheExperience from "../ui/components/Home/TheExperience/TheExperience";
import Data from "../ui/components/Home/Data/Data";
import Contact from "../ui/components/Home/Contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Cover />
      <TheExperience />
      <Data />
      <Contact />
    </main>
  );
}
