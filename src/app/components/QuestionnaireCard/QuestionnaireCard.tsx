import { Card } from "@/lib/Card";

import { QUESTIONNAIRE_ID, questions } from "@/data/questions";

const QuestionnaireCard = () => {
  return (
    <Card
      href={`/questionnaire/${QUESTIONNAIRE_ID}`}
      title="My questionnaire"
      footer={`${questions.length} questions`}
    />
  );
};

export default QuestionnaireCard;
