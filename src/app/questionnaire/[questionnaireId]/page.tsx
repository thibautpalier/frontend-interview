import { Metadata } from "next";

import Questionnaire from "./components/Questionnaire/Questionnaire";

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
    <>
      <h1>Here is the questionnaire content</h1>
      <Questionnaire questionnaireId={questionnaireId} />
    </>
  );
};

export default QuestionnairePage;
