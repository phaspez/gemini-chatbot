import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useEffect } from "react";
import { ChatBot, ResponseData } from "./GlobalInterfaces";

function ResponsesDisplayer({ responses }: ChatBot) {
  return (
    <div className="row w-full px-0 mx-0 pb-20">
      <div className="py-12 px-0 mx-0 grid grid-cols-1 ">
        {responses.map((response: ResponseData, index: number) => (
          <div
            key={index}
            className={
              "w-full border-2 px-12 py-7 border-slate-500 bg-opacity-50 " +
              (index % 2 != 0 ? "bg-slate-700" : "bg-black")
            }
          >
            <div className="text-sm w-11/12 px-2 text-gray-400 text-pretty">
              {response.timestamp}
            </div>
            <Markdown
              className={"p-2 text-wrap"}
              key={index}
              rehypePlugins={[rehypeRaw]}
            >
              {response.dialogue}
            </Markdown>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResponsesDisplayer;
