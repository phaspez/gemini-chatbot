import EmptyChatExamplePrompt from "./EmptyChatExamplePrompt";

export function EmptyChatGetStarted({
	submitPrompt,
}: {
	submitPrompt(prompt: string): void;
}) {
	return (
		<div className="grid min-h-max w-full items-center">
			<div className="rounded-lg p-4 pb-6 border-2 border-gray-500 dark:text-white text-black">
				{" "}
				<h2>Những câu hỏi bạn có thể đặt cho AI</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2">
					<EmptyChatExamplePrompt
						{...{
							prompt: "Ở ĐHCT có được phát người iu?",
							handleExamplePrompt: submitPrompt,
						}}
					/>
					<EmptyChatExamplePrompt
						{...{
							prompt: "Điểm chuẩn ngành KTPM ở ĐHCT là bao nhiêu?",
							handleExamplePrompt: submitPrompt,
						}}
					/>
					<EmptyChatExamplePrompt
						{...{
							prompt: "Các phương thức xét tuyển của trường ĐHCT?",
							handleExamplePrompt: submitPrompt,
						}}
					/>
					<EmptyChatExamplePrompt
						{...{
							prompt: "Học phí của trường ĐHCT rẻ không ạ?",
							handleExamplePrompt: submitPrompt,
						}}
					/>
				</div>
			</div>
		</div>
	);
}
