export interface ChatBot {
	responses: ResponseData[];
	addNewResponse(
		response: string,
		sender: string, //"user" | "model",
		imageURL?: string
	): void;
}

export interface ResponseData {
	dialogue: string;
	timestamp: string;
	imageURL: string;
	sender: string; //"user" | "model";
}

export interface ThemeButtonProps {
	themeState: string;
	setThemeState: (theme: string) => void;
	chatSchool: string;
	setChatSchool: (school: string) => void;
}
