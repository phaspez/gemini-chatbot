"use client";

import PromptInput from "./PromptInput";
import { useState, useEffect, useContext, createContext, Context } from "react";
import ResponsesDisplayer from "./ResponsesDisplayer";
import { ChatBot, ResponseData } from "./GlobalInterfaces";
import { EmptyChatGetStarted } from "./EmptyChatGetStarted";
import { NavSidebar } from "./Sidebar";
import { ThemeButtonProps } from "./GlobalInterfaces";
import { ThemeButton } from "./ThemeButton";

export let ThemeContext = createContext<ThemeButtonProps | undefined>(
	undefined
);

export default function Home() {
	const [chatlog, setChatlog] = useState<ResponseData[]>([]);
	const [isWaitingPrompt, setIsWaitingPrompt] = useState<boolean>(false);
	const [theme, setTheme] = useState<string>(
		localStorage.getItem("colormode") || ""
	);

	const context: ThemeButtonProps = {
		setThemeState: setTheme,
		themeState: theme,
	};

	ThemeContext = createContext<ThemeButtonProps | undefined>(context);

	/* useEffect(() => {
		// save theme to local
		if (typeof window !== "undefined") {
			let localTheme = localStorage.getItem("colormode");
			if (!localTheme) {
				localStorage.setItem("colormode", "dark");
			} else {
				setTheme(localTheme);
			}
		}
	}, []); */

	// get the <html> element, and or remove the dark class
	useEffect(() => {
		let html = document.documentElement;
		html.classList.remove("dark");
		html.classList.remove("light");

		html.classList.add(theme);
		localStorage.setItem("colormode", theme);
	}, [theme]);

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
		<ThemeContext.Provider value={context}>
			<main className="flex min-h-screen p-0 m-0 flex-col items-center justify-between px-0 text-white dark:text-dark">
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
				<ThemeButton />
			</main>
		</ThemeContext.Provider>
	);
}
