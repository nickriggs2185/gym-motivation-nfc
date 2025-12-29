import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a hardcore gym motivation coach." },
      { role: "user", content: "Give one short, powerful gym motivation quote." }
    ]
  });

  res.status(200).json({
    quote: completion.choices[0].message.content
  });
}
