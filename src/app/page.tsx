import styles from "./page.module.css";
import { Metadata } from "next";
import QuestionnaireCard from "./components/QuestionnaireCard/QuestionnaireCard";

export const metadata: Metadata = {
  title: "Apiday",
  icons: { icon: "/favicon.ico" },
};

const HomePage = () => {
  return (
    <main className={styles.root}>
      <h1>Welcome to Apiday !</h1>

      <section>Your questionnaires:</section>
      <QuestionnaireCard />
    </main>
  );
};

export default HomePage;
