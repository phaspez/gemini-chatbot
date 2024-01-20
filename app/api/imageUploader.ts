"use server";


export async function uploadImage(formData:FormData) {
	const file = formData.get("file") as File;
	console.log(file);
}
