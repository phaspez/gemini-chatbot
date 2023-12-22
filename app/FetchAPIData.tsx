import { GoogleGenerativeAI } from "@google/generative-ai";
import api_key from "./api.js";

async function fetchAPIData(prompt: string) {
  const genAI = new GoogleGenerativeAI(api_key);

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);

  const response = await result.response;
  const text = response.text();

  return text;
}

export default fetchAPIData;
