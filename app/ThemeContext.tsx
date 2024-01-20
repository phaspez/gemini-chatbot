import { useState, useEffect, useContext, createContext, Context } from "react";
import { ThemeButtonProps } from "./GlobalInterfaces";

const ThemeContext = createContext<ThemeButtonProps | undefined>(undefined);

export const ThemeContextProvider = (props: any) => {
	const [theme, setTheme] = useState<string>("");
	// get the <html> element, and or remove the dark class
	useEffect(() => {
		if (typeof window !== "undefined") {
			setTheme(localStorage.getItem("colormode") || "");
			console.log(localStorage.getItem("colormode"));
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (!theme) {
				return;
			}
			let html = document.documentElement;
			html.classList.remove("dark");
			html.classList.remove("light");

			if (theme) {
				html.classList.add(theme);
			}

			localStorage.setItem("colormode", theme || "");
		}
	}, [theme]);

	const context: ThemeButtonProps = {
		setThemeState: setTheme,
		themeState: theme,
	};

	return (
		<ThemeContext.Provider value={context}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error(
			"useThemeContext must be used within a ThemeContextProvider"
		);
	}
	return context;
};
