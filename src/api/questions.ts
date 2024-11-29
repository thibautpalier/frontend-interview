import { Question, QUESTIONNAIRE_ID, questions } from "@/data/questions";
import { sleep } from "@/api/utils";
import { SHARING_TOKEN } from "@/data/token";
import { useEffect, useState } from "react";

export const loadQuestions = async (questionnaireId: string) => {
  await sleep(1000);
  if (questionnaireId !== QUESTIONNAIRE_ID)
    throw Error("Unknown questionnaire.");
  return questions;
};

export const useQuestions = (questionnaireId: string) => {
  const [questions, setQuestions] = useState<Question[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const load = async () => {
      try {
        setQuestions(await loadQuestions(questionnaireId));
      } catch (e) {
        setError((e as Error).message);
      }
    };
    void load();
  }, [questionnaireId]);

  return { questions, error };
};

export const loadQuestionWithSharingToken = async (
  questionId: string,
  token: string,
) => {
  await sleep(1000);
  if (token != SHARING_TOKEN) throw Error("Wrong token");
  const question = questions.find((q) => q.id === questionId);

  if (!question) throw Error("Unknown question.");

  return question;
};

export const useSharedQuestion = (questionId: string, token: string) => {
  const [question, setQuestion] = useState<Question>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const load = async () => {
      try {
        setQuestion(await loadQuestionWithSharingToken(questionId, token));
      } catch (e) {
        setError((e as Error).message);
      }
    };

    void load();
  }, [questionId, token]);

  return { question, error };
};
