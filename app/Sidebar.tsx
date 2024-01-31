"use client";

import { IoMdMenu } from "react-icons/io";
import { SidebarAddChat } from "./Sidebar-AddChat";
import { SideBarConversation } from "./Sidebar-Conversation";
import { useState } from "react";
import { FaGear, FaUser } from "react-icons/fa6";
import { UsernamePanel } from "./Sidebar-UsernamePanel";
import Image from "next/image";
import i from "../public/DHCT.png";
import { useThemeContext } from "./ThemeContext";

export function NavSidebar() {
	const [showSidebar, setShowSidebar] = useState(false);
	const themeContext = useThemeContext();
	const { chatSchool, setChatSchool } = themeContext!;

	return (
		<div className="fixed text-black dark:text-white min-w-max p-2 left-0 z-30 gap-0">
			<button
				className={
					"text-3xl rounded-lg px-3 mb-2 py-2 border-2 border-gray-500 hover:bg-gray-500 " +
					(showSidebar ? "bg-gray-400" : "")
				}
				onClick={() => setShowSidebar(!showSidebar)}
			>
				<IoMdMenu />
			</button>

			<div className="fixed left-14 ml-5 py-3 top-0">
				<h4>{chatSchool}</h4>
			</div>

			<nav
				className={
					"grid bg-white/70 dark:bg-gray-600/70 backdrop-blur-md overflow-hidden min-w-80 shadow-2xl border-2 max-w-96 p-4 rounded-lg transition-all duration-200 " +
					(showSidebar ? "fade-in" : "fade-out delay-200 hidden")
				}
			>
				<div className="overflow-clip">
					<div className="overflow-hidden">
						<Image
							className="-z-20 fixed -right-4 -top-4 opacity-30"
							src={i}
							alt="logo"
							width={160}
							height={160}
						></Image>
						<h1>CAAS</h1>
						<p>
							<sup>Hệ thống tư vấn tuyển sinh</sup>
						</p>
					</div>
					<div className="py-5"></div>
					<div className="grid grid-cols-1 items-center gap-1 px-1">
						<SideBarConversation chatName={"Trường ĐHCT"}></SideBarConversation>
						<div className="p-2">
							<hr />
						</div>
						<SideBarConversation
							chatName={"Trường CNTT&TT"}
						></SideBarConversation>
						<SideBarConversation
							chatName={"Trường Kinh Tế"}
						></SideBarConversation>
						<SideBarConversation
							chatName={"Trường Nông Nghiệp"}
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
