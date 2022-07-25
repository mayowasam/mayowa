import { useState, createContext, useContext } from "react";

const CustomCursorContext = createContext();

export const CursorLookType = "default" || "slider-hover"||"slider-drag" || "text"||"link"|| "hamburger";

const CustomCursorManager = ({ children }) => {
  // const [type, setType] = useState("default");
  const [type, setType] = useState("hamburger");
  // const [type, setType] = useState(CursorLookType);
  const [size, setSize] = useState("small"); //regular


  return (
    <CustomCursorContext.Provider value={{ 
      type, setType , 
    size, setSize
    }}>
      {children}
    </CustomCursorContext.Provider>
  );
};


export const useCursor = () => useContext(CustomCursorContext)
export default CustomCursorManager;