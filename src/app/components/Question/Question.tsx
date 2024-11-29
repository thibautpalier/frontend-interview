import { Question as QuestionType } from "@/data/questions";

import { Chip } from "@/lib/Chip";
import Answers from "../Answers/Answers";

import styles from "./styles.module.css";
import ShareQuestionButton from "../ShareQuestionButton/ShareQuestionButton";

interface QuestionProps {
  question: QuestionType;
  shareable?: boolean;
}

const Question = ({ question, shareable = false }: QuestionProps) => {
  return (
    <div className={styles.card} key={question.id}>
      <div className={styles.actions}>
        <Chip className={styles.status}>{question.status}</Chip>

        {shareable && <ShareQuestionButton questionId={question.id} />}
      </div>
      <h2>{question.text}</h2>

      <Answers question={question} />
    </div>
  );
};

export default Question;
