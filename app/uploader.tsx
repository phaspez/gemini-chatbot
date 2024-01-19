"use client";

import { UploadButton } from "./utils/uploadthing";
import { IoImage } from "react-icons/io5";

export default function Uploader({
	updater,
}: {
	updater: (url: string) => void;
}) {
	return (
		<div className="flex items-center justify-between">
			<div className="rounded-md bg-gray-700 p-2 mt-2">
				<UploadButton
					endpoint="imageUploader"
					className="ut-allowed-content:text-gray-400"
					onClientUploadComplete={(res) => {
						// Do something with the response
						console.log("Files: ", res);
						if (res[0].url) {
							updater(res[0].url);
						}
					}}
					onUploadError={(error: Error) => {
						// Do something with the error.
						alert(`ERROR! ${error.message}`);
					}}
				/>
			</div>
		</div>
	);
}
