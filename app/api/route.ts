import { OpenAI } from "openai"; // Biblioteca para a API do GPT

export type GenerateTriviaResponse = {
  questions?: string[];
};

export async function GET(
  request: Request,
  { params }: { params: { focus: string } }
): Promise<Response> {
  // Supondo que você possa passar um parâmetro na requisição para definir o foco

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const prompt =
    params?.focus === "books"
      ? "Generate 10 trivia questions about the books of Game of Thrones."
      : "Generate 10 trivia questions about the Game of Thrones TV series;";

  console.log(prompt);
  try {
    // Chamada correta para o OpenAI chat completions
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      max_tokens: 1000,
      messages: [
        {
          role: "system",
          content:
            "You are a trivia game master, generate questions based on the focus, all questions will have 4 answers, the answers will have a lowercase letter to identify and a ), and the correct answer must be one of the options, the questions must be in portuguese, include the word 'Answer: ' before the correct answer.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    console.log(response);

    // Verificando o retorno da API para garantir que há conteúdo
    const messageContent = response.choices[0]?.message?.content?.trim();
    console.log(messageContent);
    const questions = messageContent ? messageContent.split("\n") : [];

    console.log(questions);

    // Retornando a resposta corretamente como JSON
    return new Response(JSON.stringify({ questions }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error generating questions:", error);

    // Retornando o erro com status apropriado
    return new Response(
      JSON.stringify({ error: "Error generating questions" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
