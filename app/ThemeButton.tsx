import { FaLightbulb, FaSun } from "react-icons/fa";
import { ThemeButtonProps } from "./GlobalInterfaces";
import { useContext } from "react";
import { useThemeContext } from "./ThemeContext";

export function ThemeButton() {
	const themeContext = useThemeContext();
	const { themeState, setThemeState } = themeContext!;

	return (
		<button
			className="fixed top-2 right-2 rounded-md px-3 py-2 text-3xl border-2 text-white dark:text-dark"
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
		</button>
	);
}
