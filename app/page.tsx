"use client";

import PromptInput from "./PromptInput";
import { useState, useEffect } from "react";
import ResponsesDisplayer from "./ResponsesDisplayer";
import { ChatBot, ResponseData } from "./GlobalInterfaces";
import { EmptyChatGetStarted } from "./EmptyChatGetStarted";
import { NavSidebar } from "./Sidebar";

export default function Home() {
	const [chatlog, setChatlog] = useState<ResponseData[]>([]);
	let initialResponseAdded = false;

	const addNewResponse = (
		response: string,
		sender: string,
		imageurl: string
	) => {
		let newResponse: ResponseData = {
			dialogue: response,
			timestamp: new Date().toString(),
			imageURL: imageurl,
			sender: sender,
		};
		setChatlog((prevChatlog) => [...prevChatlog, newResponse]);
	};

	const chatbot: ChatBot = {
		responses: chatlog,
		addNewResponse: addNewResponse,
	};

	return (
		<>
			<main className="flex min-h-screen p-0 m-0 flex-col items-center justify-between px-0">
				<div className="flex flex-grow justify-center px-0 w-5/6">
					{chatlog.length < 1 ? (
						<EmptyChatGetStarted />
					) : (
						<ResponsesDisplayer {...chatbot}></ResponsesDisplayer>
					)}
				</div>
				<PromptInput {...chatbot}></PromptInput>

				<div className="fixed">
					<NavSidebar />
				</div>
			</main>
		</>
	);
}
