"use client";

import { IoMdMenu } from "react-icons/io";
import { SidebarAddChat } from "./Sidebar-AddChat";
import { SideBarConversation } from "./Sidebar-Conversation";
import { useState } from "react";
import { FaGear, FaUser } from "react-icons/fa6";
import { UsernamePanel } from "./Sidebar-UsernamePanel";

export function NavSidebar() {
	const [showSidebar, setShowSidebar] = useState(false);
	console.log(showSidebar);
	return (
		<div className="fixed h-screen min-w-max p-2 left-0 z-30 gap-0">
			<button
				className={
					"text-3xl rounded-lg px-3 mb-2 py-2 border-2 border-gray-500 hover:bg-gray-500 " +
					(showSidebar ? "bg-green-700" : "")
				}
				onClick={() => setShowSidebar(!showSidebar)}
			>
				<IoMdMenu />
			</button>
			<nav
				className={
					"grid bg-gray-600/70 backdrop-blur-xl min-w-80 border-2 max-w-96 p-4 rounded-lg transition-all shadow-2xl duration-200 " +
					(showSidebar ? "fade-in" : "fade-out delay-200 hidden")
				}
			>
				<div className="">
					<div className="">
						<h1>CAAS</h1>
						<p>
							<sup>Hệ thống tư vấn tuyển sinh</sup>
						</p>
					</div>

					<div className="grid grid-cols-1 items-center gap-1 px-1">
						<SidebarAddChat />
						<SideBarConversation
							chatName={"Conversation 1"}
						></SideBarConversation>
						<SideBarConversation
							chatName={"Conversation 2"}
						></SideBarConversation>
						<SideBarConversation
							chatName={"Conversation 3"}
						></SideBarConversation>
					</div>
					<div className="py-4"></div>
					<div>
						<UsernamePanel />
					</div>
				</div>
			</nav>
		</div>
	);
}
