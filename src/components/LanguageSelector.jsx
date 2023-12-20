"use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { languages } from "../utils/utilities";
import OutsideClickHandler from "react-outside-click-handler";
import { useCodeContext } from "../Contexts/CodeContext";
function LanguageSelector() {
  const { language, setLanguage, seActiveIcon } = useCodeContext();


  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    const newActiveIcon = languages.find(
      (lang) => lang.name === newLanguage
    )?.icon;

    if (newActiveIcon) {
      seActiveIcon(newActiveIcon);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div onClick={toggleDropdown}>
        <p className="py-[5px] text-sm font-medium">Language</p>
        <div className="dropdown-title capitalize w-[120px] hover:text-slate-50 transition-all duration-300 ease-in-out">
          {language}
          <FaChevronDown />
        </div>

        {showDropdown && (
          <div className="absolute dropdown-menu flex flex-col py-2 w-32 rounded-md gap-1 px-2">
            {languages.map((lang, i) => {
              return (
                <div key={i}>
                  <button
                    className="hover:text-orange-500 dropdown-item text-left  transition-all duration-300 ease-in-out"
                    onClick={() => handleLanguageChange(lang.name)}
                  >
                    {lang.name}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}

export default LanguageSelector;
