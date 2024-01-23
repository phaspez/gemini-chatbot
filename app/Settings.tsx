"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import {
	FaLightbulb,
	FaRegUserCircle,
	FaSignOutAlt,
	FaSun,
} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useThemeContext } from "./ThemeContext";
import { FaTrashCan } from "react-icons/fa6";
//import { classNames } from "uploadthing/client";

export default function Settings() {
	const [openModal, setOpenModal] = useState(false);
	const themeContext = useThemeContext();
	const { themeState, setThemeState } = themeContext!;

	return (
		<>
			<Button onClick={() => setOpenModal(true)} className="flex bg-gray-500">
				<div className="text-xl">
					<IoMdSettings />
				</div>
			</Button>
			<Modal
				show={openModal}
				onClose={() => setOpenModal(false)}
				className="bg-black"
			>
				<Modal.Header>Cài Đặt</Modal.Header>
				<Modal.Body>
					<div className="grid text-black dark:text-white gap-6">
						<div className="flex rounded-lg items-center">
							<span className="text-3xl flex-none pl-2">
								<FaRegUserCircle />
							</span>

							<div className="grow">
								<p className="font-semibold">Anonymous</p>
							</div>

							<Button color="failure">
								<FaSignOutAlt />
							</Button>
						</div>

						<div className="space-y-6">
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								Bằng việc sử dụng dịch vụ, bạn chấp nhận bán linh hồn cho quỷ dữ
								và thông tin đời sống cá nhân của bạn.
							</p>
						</div>

						<div className="flex items-center">
							<p className="grow">Chế độ màu</p>
							<Button
								className="text-lg"
								onClick={(e) => {
									e.preventDefault();
									if (themeState == "dark") {
										setThemeState("light");
									} else {
										setThemeState("dark");
									}
								}}
							>
								{themeState == "dark" ? <FaLightbulb /> : <FaSun />}
							</Button>
						</div>
						<div className="flex items-center">
							<p className="grow">Xóa dữ liệu</p>
							<Button color="failure">
								<FaTrashCan />
							</Button>
						</div>
						<div className="flex items-center">
							<Button onClick={() => {}}>Truy cập trang admin</Button>
							<small className="p-2">Hiện nếu user là admin</small>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}

/* 
				<Modal.Footer>
					<Button onClick={() => setOpenModal(false)}>I accept</Button>
					<Button color="gray" onClick={() => setOpenModal(false)}>
						Decline
					</Button>
				</Modal.Footer>
*/
