import Head from "next/head";
import { useRouter } from "next/router";
import { Loader } from "@/lib/Loader";
import { QuestionnaireLayout } from "@/layouts/QuestionnaireLayout";

export default function Questionnaire() {
  const { isReady, query } = useRouter();
  if (!isReady) return <Loader />;
  const questionnaireId = parseInt(query.questionnaireId as string);
  return (
    <>
      <Head>
        <title>Questionnaire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QuestionnaireLayout questionnaireId={questionnaireId} />
    </>
  );
}
