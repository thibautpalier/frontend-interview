import styles from "./Questions.module.css";
import { Question } from "@/data/questions";
import { Chip } from "@/lib/Chip";
import { Answers } from "./Answers";

interface QuestionsProps {
  questions: Question[];
}

const Questions = ({ questions }: QuestionsProps) => {
  return (
    <div className={styles.root}>
      {questions.map((question) => (
        <div className={styles.card} key={question.id}>
          <Chip className={styles.status}>{question.status}</Chip>
          <h2>{question.text}</h2>
          <Answers question={question} />
        </div>
      ))}
    </div>
  );
};

export default Questions;
