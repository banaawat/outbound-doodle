import { createServerFn } from "@tanstack/react-start";

export const generateAi = createServerFn({ method: "POST" })
  .inputValidator((input: { prompt: string }) => {
    if (!input || typeof input.prompt !== "string") {
      throw new Error("prompt required");
    }
    if (input.prompt.length === 0 || input.prompt.length > 8000) {
      throw new Error("prompt length out of range");
    }
    return input;
  })
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) throw new Error("AI not configured");

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [{ role: "user", content: data.prompt }],
        max_tokens: 1000,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`AI gateway ${res.status}: ${text.slice(0, 200)}`);
    }

    const json = await res.json();
    const text: string = json?.choices?.[0]?.message?.content ?? "";
    return { text };
  });
