import styles from "./page.module.css";
import InteractiveList from "@/components/List";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <InteractiveList />
      </main>
      <footer className={styles.footer}>
        <p>3rd Task for APS by Shirin</p>
      </footer>
    </div>
  );
}
