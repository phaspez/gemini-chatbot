"use client";

import {
	Button,
	Modal,
	Label,
	RangeSlider,
	RangeSliderProps,
} from "flowbite-react";
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
import Link from "next/link";
//import { classNames } from "uploadthing/client";

let x: RangeSliderProps = {};

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
				className="bg-slate-950 bg-opacity-50 backdrop-blur-sm"
				show={openModal}
				onClose={() => setOpenModal(false)}
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

						<div className="flex items-center">
							<div className="flex grow">
								<p className="flex grow">Chế độ chat</p>
							</div>
							<div className="flex grow text-gray-400">
								<div className="grid w-full">
									<div className="grid grid-cols-3">
										<p className="text-left">
											<small>Nhanh</small>
										</p>
										<p className="text-center">
											<small>|</small>
										</p>
										<p className="text-right">
											<small>Chậm</small>
										</p>
									</div>
									<RangeSlider
										id="default-range"
										className="z z-10"
										step={1}
										max={3}
										defaultValue={1}
										min={1}
										width={400}
										color="white"
									/>
									<div className="grid grid-cols-3">
										<p className="text-left">
											<small>Ngắn</small>
										</p>
										<p className="text-center">
											<small>|</small>
										</p>
										<p className="text-right">
											<small>Dài</small>
										</p>
									</div>
								</div>
							</div>
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
							<Link href="/admin">
								<Button onClick={() => {}}>Truy cập trang admin</Button>
							</Link>
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
