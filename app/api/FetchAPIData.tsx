"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const api_key = process.env.API_KEY;

async function fetchAPIData(prompt: string) {
	const genAI = await new GoogleGenerativeAI(api_key || "");

	const model = genAI.getGenerativeModel({ model: "gemini-pro" });
	const result = await model.generateContent(prompt);

	const response = await result.response;
	const text = await response.text();

	return text;
}
export default fetchAPIData;