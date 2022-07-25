import { useMemo } from "react";
import { useState } from "react";

export function useDarkMode() {
    const [theme, setTheme] = useState("light")

    const setMode = (mode) => {
        localStorage.setItem("theme", mode)
        setTheme(mode)
    }

    const Toggle = () => (theme === "light") ? setMode("dark") : setMode("light")

    useMemo(() => {
        const themeVal = localStorage.getItem("theme")
        themeVal ? setTheme(themeVal) : setMode("dark")

    }, [])




    return {
        theme,
        Toggle
    }

}