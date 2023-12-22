import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useEffect } from "react";

export interface ChatBot {
  responses: string[];
  addNewResponse(response: string): void;
}

function ResponsesDisplayer({ responses }: ChatBot) {
  return (
    <div className="w-full">
      {responses.map((response: string, index: number) => (
        <div
          key={index}
          className={
            "w-full border-t-2 p-1 py-7 border-b-2 border-slate-200 " +
            (index % 2 != 0 ? "bg-slate-700" : "bg-black")
          }
        >
          <Markdown className={"p-2"} key={index} rehypePlugins={[rehypeRaw]}>
            {response}
          </Markdown>
        </div>
      ))}
    </div>
  );
}

export default ResponsesDisplayer;
