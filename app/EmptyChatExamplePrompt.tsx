import { FaArrowRight } from "react-icons/fa";

export interface IExamplePrompt {
	prompt: string;
	handleExamplePrompt: (prompt: string) => void;
}

export default function EmptyChatExamplePrompt({
	prompt,
	handleExamplePrompt,
}: IExamplePrompt) {
	return (
		<div>
			<div className="flex items-center">
				<p className="grow">{prompt}</p>
				<button className="text-lg text-right p-2" onClick={() => {}}>
					<FaArrowRight />
				</button>
			</div>
		</div>
	);
}
