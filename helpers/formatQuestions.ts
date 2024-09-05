import { QuestionModel } from "@/models/questionModel";

export const formatQuestions = (data: { questions: string[] }) => {
  const parsedQuestions: QuestionModel[] = [];
  let currentQuestion: QuestionModel | null = null;

  data.questions.forEach((line: string, index: number) => {
    if (line.startsWith(`${parsedQuestions.length + 1}.`)) {
      currentQuestion = {
        id: parsedQuestions.length,
        question: line,
        answers: [],
        correctAnswer: "",
      };
    } else if (
      line.startsWith("a)") ||
      line.startsWith("b)") ||
      line.startsWith("c)") ||
      line.startsWith("d)")
    ) {
      currentQuestion!.answers.push(line);
    } else if (line.startsWith("Answer: ")) {
      currentQuestion!.correctAnswer = line.slice(8); // remove 'Answer: ' from the line
    } else if (line === "") {
      parsedQuestions.push(currentQuestion!);
      currentQuestion = null;
    }
  });

  return parsedQuestions;
};
