import React,{useState} from "react";
import { FaChevronDown } from "react-icons/fa";
import { themes } from "../utils/utilities";
import OutsideClickHandler from "react-outside-click-handler";
import { useCodeContext } from "../Contexts/CodeContext";

function ThemeSelector() {
  const { theme, setTheme } = useCodeContext();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="theme-selector" onClick={toggleDropdown}>
        <p className="py-[5px] text-sm font-medium">Code Colors</p>
        <div className="dropdown-title capitalize w-[120px] hover:text-slate-50 transition-all duration-300 ease-in-out">
          {theme} <FaChevronDown />
        </div>
        {showDropdown && (
          <div className=" absolute dropdown-menu w-32 flex flex-col z-10 gap-2 py-2">
            {themes.map((theme, i) => {
              return (
                <button
                  key={i}
                  onClick={() => handleThemeChange(theme)}
                  className=" hover:text-orange-500 capitalize text-left transition-all duration-300 ease-in-out px-2"
                >
                  {theme}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}

export default ThemeSelector;
