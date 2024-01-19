"use client";

//@ts-ignore

import { useState, useEffect } from "react";
import fetchAPIData from "./api/FetchAPIData";
import fetchAPIDataVision from "./api/FetchAPIDataVision";
import { ChatBot } from "./GlobalInterfaces";
import Textarea from "react-textarea-autosize";
import { IoMdSend, IoMdImage, IoMdMicrophone } from "react-icons/io";
import Uploader from "./uploader";

async function handleSendPrompt(prompt: string, imageurl: string) {
	console.log("Sending prompt: " + prompt);

	if (imageurl) {
		let success = await fetchAPIDataVision(prompt, imageurl);
		if (success) {
			return success;
		}
	} else {
		let success = await fetchAPIData(prompt);
		if (success) {
			return success;
		}
	}
}

function PromptInput({ addNewResponse }: ChatBot) {
	const [inputValue, setInputValue] = useState<string>("");
	const [inputImageURL, setInputImageURL] = useState<string>("");

	const handlePrompt = async () => {
		let response =
			(await handleSendPrompt(inputValue, inputImageURL)) ||
			"An error has occurred. Please try again";
		addNewResponse(response, "model", inputImageURL);
	};

	const updateURL = (url: string) => {
		setInputImageURL(url);
	};

	useEffect(() => {
		const fetchData = async () => {
			let response = await fetch(inputImageURL);
			return response;
		};

		fetchData();
	}, [inputImageURL]);

	return (
		<div className="fixed w-screen bottom-0 py-9 pt-12 -mb-5 bg-gradient-to-t from-black to-transparent">
			<div className="lg:px-24 md:px-16 px-4">
				<div className="flex gap-2 px-2">
					<div className="self-end">
						<Uploader updater={updateURL} />
					</div>
					<div className="justify-end items-end self-end">
						{inputImageURL ? (
							<img
								id="img-preview"
								src={inputImageURL}
								alt="Uploaded"
								className="max-w-28 rounded-md justify-end align-bottom"
							/>
						) : (
							<></>
						)}
					</div>
				</div>
				<div className="flex px-2 text-center text-wrap overflow-hidden align-middle justify-center">
					<Textarea
						value={inputValue}
						tabIndex={0}
						rows={1}
						placeholder="Bạn muốn hỏi gì?"
						spellCheck={true}
						className="rounded-lg resize-none p-4 my-2 bg-gray-700 grow overflow-visible"
						onChange={(e) => {
							let newInputValue = e.target.value;
							setInputValue(newInputValue);
						}}
					/>
					<div className="relative text-xl flex flex-col px-2 overflow-hidden max-h-60 bg-background">
						<button
							className="rounded-md bg-green-700 text-white p-2 mt-2"
							style={{ alignSelf: "flex-start" }}
							type="submit"
							onClick={() => {
								addNewResponse(inputValue, "user", inputImageURL);
								handlePrompt();
								setInputValue("");
								setInputImageURL("");
							}}
						>
							<IoMdSend />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PromptInput;
