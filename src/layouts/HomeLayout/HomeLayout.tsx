import styles from "./HomeLayout.module.css";
import { QuestionnaireCard } from "./QuestionnaireCard";

const HomeLayout = () => {
  return (
    <main className={styles.root}>
      <h1>Welcome to Apiday !</h1>
      <section>Your questionnaires:</section>
      <QuestionnaireCard />
    </main>
  );
};

export default HomeLayout;
