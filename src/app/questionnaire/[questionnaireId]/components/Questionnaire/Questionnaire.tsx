"use client";

import styles from "./questionnaire.module.css";

import { useQuestions } from "@/api/questions";
import { Alert } from "@/lib/Alert";
import { Loader } from "@/lib/Loader";

import Question from "../Question/Question";

interface QuestionsProps {
  questionnaireId: string;
}

const Questionnaire = ({ questionnaireId }: QuestionsProps) => {
  const { questions, error } = useQuestions(parseInt(questionnaireId));

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
        <Question question={question} key={question.id} />
      ))}
    </div>
  );
};

export default Questionnaire;
