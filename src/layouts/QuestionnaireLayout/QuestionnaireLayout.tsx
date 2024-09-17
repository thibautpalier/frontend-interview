import styles from "./QuestionnaireLayout.module.css";
import { useQuestions } from "@/api/questions";
import { Alert } from "@/lib/Alert";
import { Loader } from "@/lib/Loader";
import { Questions } from "@/layouts/QuestionnaireLayout/Questions";

interface QuestionnaireLayoutProps {
  questionnaireId: number;
}

const QuestionnaireLayout = ({ questionnaireId }: QuestionnaireLayoutProps) => {
  const { questions, error } = useQuestions(questionnaireId);
  if (error)
    return (
      <main className={styles.alert}>
        <Alert color="danger">{error}</Alert>
      </main>
    );
  if (!questions) return <Loader />;
  return (
    <main className={styles.root}>
      <h1>Here is the questionnaire content:</h1>
      <Questions questions={questions} />
    </main>
  );
};

export default QuestionnaireLayout;
