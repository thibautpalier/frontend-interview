import styles from "./styles.module.css";

const QuestionnaireLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.root}>{children}</main>;
};

export default QuestionnaireLayout;
