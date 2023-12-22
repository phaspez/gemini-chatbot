"use client";

import PromptInput from "./PromptInput";
import { useState, useEffect } from "react";
import ResponsesDisplayer from "./ResponsesDisplayer";

export interface ChatBot {
  responses: string[];
  addNewResponse(response: string): void;
}

export default function Home() {
  const [chatlog, setChatlog] = useState<string[]>([
    "Hello! Enter some text to get started!",
  ]);

  useEffect(() => {}, [chatlog]);

  const addNewResponse = (response: string) => {
    setChatlog([...chatlog, response]);
  };

  const chatbot: ChatBot = {
    responses: chatlog,
    addNewResponse: addNewResponse,
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Fancy chatbot lol. My ADHD brain exploded
      <ResponsesDisplayer {...chatbot}></ResponsesDisplayer>
      <PromptInput {...chatbot}></PromptInput>
    </main>
  );
}
