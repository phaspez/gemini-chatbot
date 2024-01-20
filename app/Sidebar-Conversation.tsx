import { BsThreeDotsVertical } from "react-icons/bs";

interface SidebarButton {
	chatName: string;
	onClick?(e: any): void;
}

export function SideBarConversation({ chatName, onClick }: SidebarButton) {
	return (
		<button
			onClick={onClick}
			className="grow text-left overflow-clip p-3 border-2 rounded-md text-black dark:text-white border-gray-500 dark:hover:bg-gray-500 hover:bg-gray-300"
		>
			{chatName}
		</button>
	);
}
