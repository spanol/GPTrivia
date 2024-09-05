export interface QuestionModel {
  id: number;
  question: string;
  answers: string[];
  selectedAnswer?: string;
  correctAnswer: string;
}
