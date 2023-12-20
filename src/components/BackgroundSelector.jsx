"use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { backgrounds } from "../utils/utilities";
import OutsideClickHandler from "react-outside-click-handler";
import { useCodeContext } from "../Contexts/CodeContext";

function BackgroundSelector(
  ) {
  const { background, setBackground } = useCodeContext();
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleBackgroundChange = (newBackground) => {
    setBackground(newBackground);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="bg-selector relative" onClick={toggleDropdown}>
        <p className="py-[5px] text-sm font-medium">Theme Selector</p>
        <div className="dropdown-title w-[62px]">
          <div
            className="rounded-full w-[20px] h-[20px]"
            style={{
              background: background,
            }}
          ></div>
          <FaChevronDown />
        </div>
        {showDropdown && (
          <div className="dropdown-menu z-10 py-4 absolute flex flex-col rounded-md w-12 items-center gap-2">
            {backgrounds.map((bg, i) => {
              return (
                <div
                  key={i}
                  onClick={() => handleBackgroundChange(bg)}
                  className="w-[20px] h-[20px] rounded-full"
                  style={{ background: bg }}
                ></div>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}

export default BackgroundSelector;
