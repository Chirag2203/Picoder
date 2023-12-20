"use client";
import React, {useContext} from "react";
import { useCodeContext } from "../Contexts/CodeContext";

function PaddingSelector() {
  const { paddings, currentPadding, setCurrentPadding } = useCodeContext()
  const changePadding = (newPadding) => {
    setCurrentPadding(newPadding);
  };


  return (
    <div>
      <p className="py-[5px] text-sm font-medium">Padding Selector</p>
      <div className="flex gap-6">
        {paddings.map((padding, i) => {
          return (
            <button
              key={i}
              onClick={() => changePadding(padding)}
              className={`h-[37px]  flex items-center justify-center text-sm px-2 cursor-pointer
                ${
                  currentPadding === padding &&
                  "bg-[#3C3C3C] text-white rounded-md"
                } hover:text-white ease-linear transition-all duration-300
              `}
            >
              {padding}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default PaddingSelector;
