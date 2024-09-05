"use client";
import { useEffect, useState } from "react";
import { QuestionModel } from "@/models/questionModel";
import { Question } from "../components/question";
import { useSearchParams } from "next/navigation";
import { formatQuestions } from "@/helpers/formatQuestions";

type ApiResponse = {
  questions: string[];
};

export default function Quiz() {
  const [questions, setQuestions] = useState<QuestionModel[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionModel>();
  const [answers, setAnswers] = useState<string[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchQuestions = async () => {
      const focus = searchParams.get("focus") ?? "series";
      // const response = await fetch(`/api`);
      // const data: ApiResponse = await response.json();
      const data = [] as any;
      const parsedQuestions = formatQuestions(data);

      console.log(parsedQuestions);
      setQuestions(parsedQuestions);
      setCurrentQuestion(parsedQuestions[0]);
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (answer: string) => {
    debugger;
    const question = questions.find(
      (question) => question.id === currentQuestion?.id
    );
    if (question) {
      question.selectedAnswer = answer;
      setAnswers([...answers, answer]);
    }

    setAnswers([...answers, answer]);
    handleNext();
  };

  const handleNext = () => {
    const nextQuestion =
      questions.findIndex((question) => question.id === currentQuestion?.id) +
      1;

    console.log(nextQuestion);

    if (nextQuestion === -1) {
      handleFinish();
      return;
    }

    setCurrentQuestion(questions[nextQuestion]);
  };

  const handlePrevious = () => {
    const previousQuestion =
      questions.findIndex((question) => question.id === currentQuestion?.id) -
      1;
    setCurrentQuestion(questions[previousQuestion]);
  };

  const handleFinish = () => {
    console.log("Finish");
  };

  const handleSkip = () => {
    const nextQuestion =
      questions.findIndex((question) => question.id === currentQuestion?.id) +
      1;
    setCurrentQuestion(questions[nextQuestion]);
  };

  const handleRestart = () => {
    setCurrentQuestion(questions[0]);
  };

  const handleSubmit = () => {
    console.log("Submit");
  };

  return (
    <section className="question w-4/5 flex flex-col">
      <Question
        key={currentQuestion?.id}
        id={currentQuestion?.id ?? 0}
        onRestart={handleRestart}
        onSubmit={handleSubmit}
        question={currentQuestion?.question ?? ""}
        answers={currentQuestion?.answers ?? []}
        correctAnswer={currentQuestion?.correctAnswer ?? ""}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onFinish={handleFinish}
        onSkip={handleSkip}
      />
    </section>
  );
}
