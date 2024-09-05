"use client";
import { QuestionModel } from "@/models/questionModel";
import { useState } from "react";

interface QuestionProps extends QuestionModel {
  onAnswer: (answer: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  onFinish: () => void;
  onSkip: () => void;
  onRestart: () => void;
  onSubmit: () => void;
}

export const Question = ({
  question,
  answers,
  correctAnswer,
  onAnswer,
  onNext,
  onPrevious,
  onFinish,
  onSkip,
  onRestart,
  onSubmit,
}: QuestionProps) => {
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  return (
    <>
      <div>
        <div className="bg-white border-2 justify-between border-gray-900 flex flex-col gap-4 h-[550px]">
          <div className="question w-full text-center">
            <h2>{question}</h2>
          </div>
          <div className="answer flex flex-col gap-2 p-6">
            <div className="flex justify-between gap-2">
              {answers?.map((answer) => (
                <button
                  onClick={() => onAnswer(answer.slice(0, 1))}
                  className="answer-button"
                  key={answer}
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <button onClick={onPrevious}>Previous</button>
        <button onClick={onNext}>Next</button>
        <button onClick={onFinish}>Finish</button>
        <button onClick={onSkip}>Skip</button>
        <button onClick={onRestart}>Restart</button>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </>
  );
};
