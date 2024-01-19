import { FaRegUserCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

export function UsernamePanel({
	avatar,
	username,
}: {
	avatar?: string;
	username?: string;
}) {
	if (!username) {
		username = "Anonymous";
	}

	return (
		<div className="flex rounded-lg items-center py-2 px-2">
			{avatar ? (
				<img src={avatar} alt="" />
			) : (
				<span className="text-3xl flex-none">
					<FaRegUserCircle />
				</span>
			)}
			<div className="grow">
				<p>{username}</p>
			</div>

			<button className="p-2 hover:bg-slate-500 rounded-md">
				<FaGear />
			</button>
		</div>
	);
}
