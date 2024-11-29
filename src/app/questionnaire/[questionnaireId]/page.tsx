import { Metadata } from "next";

import Questionnaire from "./components/Questionnaire/Questionnaire";

import styles from "./styles.module.css";

interface QuestionnairePageProps {
  params: { questionnaireId: string };
}

export const metadata: Metadata = {
  title: "Apiday",
  icons: { icon: "/favicon.ico" },
};

const QuestionnairePage = ({
  params: { questionnaireId },
}: QuestionnairePageProps) => {
  return (
    <div className={styles.root}>
      <h1>Here is the questionnaire content</h1>
      <Questionnaire questionnaireId={questionnaireId} />
    </div>
  );
};

export default QuestionnairePage;
