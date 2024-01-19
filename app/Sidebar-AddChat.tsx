import { FaPlus } from "react-icons/fa6";

export function SidebarAddChat() {
	return (
		<div className="flex rounded-lg border-2 border-gray-500 hover:bg-gray-500 py-2 px-2">
			<button className="grow text-center overflow-clip">
				Cuộc hội thoại mới
			</button>
			<div className="">
				<div className="p-2">
					<FaPlus />
				</div>
			</div>
		</div>
	);
}
