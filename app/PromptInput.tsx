"use client";

//@ts-ignore

import { useState } from "react";
import fetchAPIData from "./FetchAPIData";
import { ChatBot } from "./GlobalInterfaces";

async function handleSendPrompt(prompt: string) {
  console.log("Sending prompt: " + prompt);
  if (prompt.trim() === "") return;

  let success = await fetchAPIData(prompt);
  if (success) {
    return success;
  }
}

function PromptInput({ addNewResponse }: ChatBot) {
  const [inputValue, setInputValue] = useState<string>("");
  const [textheight, setTextHeight] = useState<string>("30px");
  let prevInputValueLen;

  const handlePrompt = async () => {
    let response = (await handleSendPrompt(inputValue)) || "hello";
    addNewResponse(response);
  };

  return (
    <div
      className="fixed w-screen bottom-4 py-9 pt-12 -mb-5 bg-gradient-to-t from-black to-transparent
    "
    >
      <div className="flex text-center text-wrap overflow-hidden align-middle justify-center">
        <textarea
          value={inputValue}
          cols={1}
          style={{ minHeight: "1em", height: textheight, overflow: "hidden" }}
          className="rounded-lg w-5/6 p-4 m-2 text-black text-ellipsis hover:border-0 overflow-visible
         "
          onChange={(e) => {
            prevInputValueLen = inputValue.length;
            let newInputValue = e.target.value;
            setInputValue(newInputValue);
            if (newInputValue.length > prevInputValueLen) {
              setTextHeight(`${e.target.scrollHeight}px`);
              console.log("adding text");
            } else {
              e.target.style.height = "min-content";
              console.log("removing text");
            }
          }}
        />
        <button
          className="rounded-md bg-green-700 text-white p-2 mt-2"
          style={{ alignSelf: "flex-start" }}
          onClick={() => {
            addNewResponse(inputValue);
            handlePrompt();
            setInputValue("");
          }}
        >
          Submit
        </button>
      </div>
      <p className="p-0 m-0 text-center">
        <small>
          it can make mistakes and suprises, blah blah you know what they said
        </small>
      </p>
    </div>
  );
}

export default PromptInput;
