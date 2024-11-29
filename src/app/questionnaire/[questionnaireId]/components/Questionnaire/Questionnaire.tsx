"use client";

import { Alert } from "@/lib/Alert";
import { Loader } from "@/lib/Loader";
import { useQuestions } from "@/api/questions";

import Question from "../../../../components/Question/Question";

import styles from "./styles.module.css";

interface QuestionsProps {
  questionnaireId: string;
}

const Questionnaire = ({ questionnaireId }: QuestionsProps) => {
  const { questions, error } = useQuestions(questionnaireId);

  if (error)
    return (
      <main className={styles.alert}>
        <Alert color="danger">{error}</Alert>
      </main>
    );

  if (!questions) return <Loader />;

  return (
    <div className={styles.root}>
      {questions.map((question) => (
        <Question question={question} key={question.id} shareable />
      ))}
    </div>
  );
};

export default Questionnaire;
