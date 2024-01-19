import { BsThreeDotsVertical } from "react-icons/bs";

export function SideBarConversation({ chatName }: { chatName: string }) {
	return (
		<div className="flex rounded-lg border-2 border-gray-500 py-2 px-2">
			<button className="grow text-left overflow-clip">{chatName}</button>
			<div className="">
				<button className="bg-transparent hover:bg-slate-500 p-2 rounded-md">
					<BsThreeDotsVertical />
				</button>
			</div>
		</div>
	);
}
