"use client";

import PromptInput from "./PromptInput";
import { useState } from "react";
import ResponsesDisplayer from "./ResponsesDisplayer";
import { ChatBot, ResponseData } from "./GlobalInterfaces";
import { EmptyChatGetStarted } from "./EmptyChatGetStarted";
import { NavSidebar } from "./Sidebar";
import { ThemeButton } from "./ThemeButton";
import { ThemeContextProvider } from "./ThemeContext";

export default function Home() {
	const [chatlog, setChatlog] = useState<ResponseData[]>([]);

	const addNewResponse = (
		response: string,
		sender: string,
		imageurl: string
	) => {
		let newResponse: ResponseData = {
			dialogue: response,
			timestamp: new Date().toLocaleString(),
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
		<ThemeContextProvider>
			<main className="flex min-h-screen p-0 m-0 flex-col items-center justify-between px-0 text-white dark:text-dark">
				<div className="flex flex-grow justify-center px-0 w-11/12 lg:w-5/6 md:w-9/12">
					{chatlog.length < 1 ? (
						<EmptyChatGetStarted
							submitPrompt={(prompt: string) =>
								addNewResponse(prompt, "user", "")
							}
						/>
					) : (
						<ResponsesDisplayer {...chatbot}></ResponsesDisplayer>
					)}
				</div>
				<PromptInput {...chatbot}></PromptInput>

				<div className="fixed">
					<NavSidebar />
				</div>
				<ThemeButton />
			</main>
		</ThemeContextProvider>
	);
}
