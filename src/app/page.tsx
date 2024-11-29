import { Metadata } from "next";

import QuestionnaireCard from "./components/QuestionnaireCard/QuestionnaireCard";

import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Apiday",
  icons: { icon: "/favicon.ico" },
};

const HomePage = () => {
  return (
    <div className={styles.root}>
      <h2>Your questionnaires</h2>
      <QuestionnaireCard />
    </div>
  );
};

export default HomePage;
