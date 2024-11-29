"use client";

import { useSearchParams } from "next/navigation";

import { useSharedQuestion } from "@/api/questions";
import { Alert } from "@/lib/Alert";
import { Loader } from "@/lib/Loader";
import Question from "../../components/Question/Question";

import styles from "./styles.module.css";

interface QuestionnairePageProps {
  params: { questionId: string };
}

const SharedQuestionPage = ({
  params: { questionId },
}: QuestionnairePageProps) => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  const { question, error } = useSharedQuestion(questionId, token);

  if (error) return <Alert color="danger">{error}</Alert>;

  if (!question) return <Loader />;

  return (
    <div className={styles.root}>
      <h1>Here is the shared question</h1>
      <Question question={question} />
    </div>
  );
};

export default SharedQuestionPage;
