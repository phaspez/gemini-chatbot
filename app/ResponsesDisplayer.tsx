import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useEffect } from "react";
import { ChatBot, ResponseData } from "./GlobalInterfaces";
import { FaUser } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";

function ResponsesDisplayer({ responses }: ChatBot) {
	console.log(responses);
	return (
		<div className="row w-full px-0 mx-0 pb-20">
			<div className="py-20 px-0 mx-0 grid grid-cols-1 gap-2">
				{responses.map((response: ResponseData, index: number) => (
					<div
						key={index}
						className={
							"w-full rounded-lg text-black dark:text-white border-2 md:px-2 lg:px-12 py-9 border-slate-500 bg-opacity-50 " +
							(index % 2 != 0
								? "dark:bg-slate-700 bg-gray-300"
								: "dark:bg-black bg-white")
						}
					>
						<div className=" pl-2 flex text-4xl">
							{response.sender == "user" ? <FaUser /> : <RiRobot2Fill />}
							<span className="text-sm w-11/12 px-2 text-gray-400 text-pretty">
								{response.timestamp}
							</span>
						</div>
						<div className=""></div>
						<Markdown
							className={"p-2 text-wrap"}
							key={index}
							rehypePlugins={[rehypeRaw]}
						>
							{response.dialogue}
						</Markdown>
						{response.imageURL ? (
							<img className="max-w-80" src={response.imageURL} alt="" />
						) : (
							<></>
						)}
					</div>
				))}
			</div>
			<div className="h-14"></div>
		</div>
	);
}

export default ResponsesDisplayer;
