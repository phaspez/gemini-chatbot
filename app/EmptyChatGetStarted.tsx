import EmptyChatExamplePrompt from "./EmptyChatExamplePrompt";

export function EmptyChatGetStarted({
	submitPrompt,
}: {
	submitPrompt(prompt: string): void;
}) {
	const handleSetTextarea = (prompt: string) => {
		let textinput = document.getElementById(
			"prompt-input"
		) as HTMLTextAreaElement;
		console.log(textinput);
		if (textinput) {
			textinput.value = prompt;
		}
	};

	return (
		<div className="grid min-h-max w-full items-center">
			<div className="rounded-lg p-4 pb-6 border-2 border-gray-500 dark:text-white text-black">
				{" "}
				<h2>Những câu hỏi bạn có thể đặt cho AI</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2">
					<EmptyChatExamplePrompt
						{...{
							prompt: "Ở ĐHCT có được phát người iu?",
							handleExamplePrompt: handleSetTextarea,
						}}
					/>
					<EmptyChatExamplePrompt
						{...{
							prompt: "Điểm chuẩn ngành KTPM ở ĐHCT là bao nhiêu?",
							handleExamplePrompt: handleSetTextarea,
						}}
					/>
					<EmptyChatExamplePrompt
						{...{
							prompt: "Các phương thức xét tuyển của trường ĐHCT?",
							handleExamplePrompt: handleSetTextarea,
						}}
					/>
					<EmptyChatExamplePrompt
						{...{
							prompt: "Học phí của trường ĐHCT rẻ không ạ?",
							handleExamplePrompt: handleSetTextarea,
						}}
					/>
				</div>
			</div>
		</div>
	);
}
