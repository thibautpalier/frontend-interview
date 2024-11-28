import { Question as QuestionType } from "@/data/questions";

import { Chip } from "@/lib/Chip";
import Answers from "../Answers/Answers";

import styles from "./question.module.css";

interface QuestionProps {
  question: QuestionType;
}

const Question = ({ question }: QuestionProps) => {
  return (
    <div className={styles.card} key={question.id}>
      <Chip className={styles.status}>{question.status}</Chip>
      <h2>{question.text}</h2>
      <Answers question={question} />
    </div>
  );
};

export default Question;
