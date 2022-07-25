import { createContext, useContext } from "react";
import { useDarkMode } from "./useDarkMode";
import { DarkTheme, LightTheme } from '../styles/globalStyles';


const StateContext = createContext()

function StateProvider({ children }) {

    const { theme, Toggle } = useDarkMode()
    const themeMode = (theme === "dark") ? DarkTheme : LightTheme






    return <StateContext.Provider value={{

        theme,
        themeMode,
        Toggle,


    }}>
        {children}

    </StateContext.Provider>

}

export const useStateVal = () => useContext(StateContext)
export default StateProvider