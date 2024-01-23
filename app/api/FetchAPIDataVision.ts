"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY || "");

async function fileToGenerativePart(path: string, mimeType: string) {
	try {
		let response = await axios.get(path);
		//console.log(response);
		const fileContent = await response.data;
		let b = Buffer.from(fileContent).toString("base64");

		return {
			inlineData: {
				data: b,
				mimeType
			}
		};
	} catch (error) {
		throw error;
	}
}



async function fetchAPIDataVision(prompt: string, imageURL: string) {
	const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

	const imageParts = [ await fileToGenerativePart(imageURL, "image/jpeg")];

	const result = await model.generateContent([prompt, ...imageParts]);
	const response = result.response;
	const text = response.text();
	return text;
}
export default fetchAPIDataVision;
