"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const startQuiz = async (focus: string) => {
    router.push(`/quiz?focus=${focus}`);
  };

  return (
    <div className="home-container">
      <h1>Game of Thrones Quiz</h1>
      <div className="button-group">
        <button onClick={() => startQuiz("series")}>Play - TV Series</button>
        <button onClick={() => startQuiz("books")}>Play - Books</button>
      </div>
    </div>
  );
}
