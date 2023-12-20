import React, { createContext, useContext, useState } from "react";
import { backgrounds, languages, themes } from "../utils/utilities";
import html2canvas from "html2canvas";
import {useRef} from "react"
const CodeContext = createContext();


export const CodeProvider = ({ children }) => {
    // all the states
  const [language, setLanguage] = useState(languages[0].name);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
  const [currentPadding, setCurrentPadding] = useState(paddings[2]);

  
//function to export the code ad png
const editorRef = useRef(null);

const exportPng = async () => {
    console.log("exporting")
    const editorElem = editorRef.current;

    if (editorElem) {
      //hide elemnets
      const handleElems = document.querySelectorAll(".handle") ;
      const cursorElem = document.querySelector(".ace_cursor") ;
      const codetitle = document.querySelector(".code-title") ;
      const codeEditor = document.querySelector(".ace_editor") ;

      handleElems.forEach((elem) => {
        elem.style.display = "none";
      });
      cursorElem.style.display = "none";
      codetitle.style.boxShadow = "none";
      codeEditor.style.boxShadow = "none";

      const canvas = await html2canvas(editorElem);
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");

      const link = document.createElement("a");
      link.download = "code.png";
      link.href = image;
      link.click();

      //show elements
      handleElems.forEach((elem) => {
        elem.style.display = "block";
      });
      cursorElem.style.display = "block";
      codetitle.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.2)";
      codeEditor.style.boxShadow = "2px 3px 10px rgba(0, 0, 0, 0.2)";
    }
  };

  return (
    <CodeContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        background,
        setBackground,
        activeIcon,
        setActiveIcon,
        paddings,
        setPaddings,
        currentPadding,
        setCurrentPadding,
        exportPng,
        editorRef,
        
      }}
    >
      {children}
    </CodeContext.Provider>
  );
};

export const useCodeContext = () => {
  return useContext(CodeContext);
};
