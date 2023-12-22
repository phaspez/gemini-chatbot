"use client";

import { useState } from "react";
import fetchAPIData from "./FetchAPIData";

export interface ChatBot {
  responses: string[];
  addNewResponse(response: string): void;
}

async function handleSendPrompt(prompt: string) {
  console.log("Sending prompt: " + prompt);
  if (prompt.trim() === "") return;

  let success = await fetchAPIData(prompt);
  return success;
}

function PromptInput({ addNewResponse, responses }: ChatBot) {
  const [inputValue, setInputValue] = useState<string>("");

  const handlePrompt = async () => {
    let response = (await handleSendPrompt(inputValue)) || "hello";
    addNewResponse(inputValue);
    addNewResponse(response);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        className="rounded-lg p-2 w-96 text-black hover:border-0"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          addNewResponse(inputValue);
          handlePrompt();
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default PromptInput;
