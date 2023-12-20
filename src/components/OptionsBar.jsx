import React, { useRef } from "react";
import { MdOutlineCloudDownload } from "react-icons/md";
import BackgroundSelector from "./BackgroundSelector";
import LanguageSelector from "./LanguageSelector";
import PaddingSelector from "./PaddingSelector";
import ThemeSelector from "./ThemeSelector";
import { useCodeContext } from "../Contexts/CodeContext";
import { TfiSave } from "react-icons/tfi";
const OptionsBar = () => {
  const exportPng = useCodeContext();

  console.log(exportPng);
  return (
    
      <header
        className=" flex gap-6  p-5 mt-12
         z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md"
      >
        <LanguageSelector />
        <ThemeSelector />
        <BackgroundSelector />
        <PaddingSelector />
        <div className="export-btn self-center ml-auto flex flex-col gap-2" >
          <button
            className="flex items-center gap-3 py-2 px-3 bg-blue-400 rounded-md text-sm text-blue-400 
              font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all 
              duration-300"
            onClick={exportPng.exportPng}
          >
            <MdOutlineCloudDownload />
            Export PNG
          </button>
          <button
            className="flex items-center gap-3 py-2 px-3 bg-blue-400 rounded-md text-sm text-blue-400 
              font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all 
              duration-300"
            onClick={exportPng.exportPng}
          >
            <TfiSave />
            Save
          </button>
        </div>
      </header>
   
  );
};

export default OptionsBar;
