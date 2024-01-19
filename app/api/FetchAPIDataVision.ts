"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import axios from "axios";
import { readFileSync } from "fs";
import img from "../../public/brett.jpg"


dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY || "");

async function fileToGenerativePart(path: string, mimeType: string) {
	//console.log("path", path);
	try {
		let response = await axios.get(path);
		//console.log(response);
		const fileContent = await response.data;
		console.log("fileContent", fileContent);
		let b = Buffer.from(fileContent).toString("base64");
		//let b = Buffer.from(readFileSync("./bill.jpg")).toString("base64")
		console.log("buffer:\n\n", b);
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
	//console.log("prompt\n", prompt);
	//console.log("imageURL\n", imageURL);
	const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

	const imageParts = [ await fileToGenerativePart(imageURL, "image/jpeg")];

	//console.log("imageParts\n", imageParts);

	const result = await model.generateContent([prompt, ...imageParts]);
	const response = result.response;
	const text = response.text();
	return text;
}
export default fetchAPIDataVision;
