"use client";

import PromptInput from "./PromptInput";
import { useState, useEffect } from "react";
import ResponsesDisplayer from "./ResponsesDisplayer";
import { ChatBot, ResponseData } from "./GlobalInterfaces";

export default function Home() {
  const [chatlog, setChatlog] = useState<ResponseData[]>([]);
  let initialResponseAdded = false;

  useEffect(() => {
    if (!initialResponseAdded) {
      initialResponseAdded = true;
      addNewResponse("Hello! Enter text to get started!");
    }
  }, []);

  const addNewResponse = (response: string) => {
    let newResponse: ResponseData = {
      dialogue: response,
      timestamp: new Date().toString(),
    };
    setChatlog((prevChatlog) => [...prevChatlog, newResponse]);
  };

  const chatbot: ChatBot = {
    responses: chatlog,
    addNewResponse: addNewResponse,
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-2 px-0">
      <h1>Fancy chatbot lol. My ADHD brain exploded</h1>
      <p className="text-center">
        <small>
          dumster shit from phaspez, using Next.js and Google Gemini <br />
          view source on{" "}
          <a href="https://github.com/phaspez/gemini-chatbot">GitHub</a> <br />
          this page is ugly lol i know
        </small>
      </p>
      <div className="flex flex-grow justify-center px-0 w-11/12">
        <ResponsesDisplayer {...chatbot}></ResponsesDisplayer>
      </div>
      <PromptInput {...chatbot}></PromptInput>
    </main>
  );
}
