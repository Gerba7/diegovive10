import Image from "next/image";
import styles from "./page.module.css";
import Cover from "./ui/components/Home/Cover/Cover";
import TheExperience from "./ui/components/Home/TheExperience/TheExperience";
import Data from "./ui/components/Home/Data/Data";

export default function Home() {
  return (
    <main className={styles.main}>
      <Cover />
      <TheExperience />
      <Data />
    </main>
  );
}
