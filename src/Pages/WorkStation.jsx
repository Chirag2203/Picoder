import React from "react";
import OptionsBar from "../components/OptionsBar";
import { useCodeContext } from "../Contexts/CodeContext";
import CodeEditor from "../components/CodeEditor";
import Instructions from "../components/Instructions";
const WorkStation = () => {
  const { editorRef } = useCodeContext();
  return (
    <div className="min-h-screen flex flex-col">
        <p className="text-4xl  font-bold my-3 mb-2 pb-2 border-orange-200 border-b">Workstation</p>
        <p className="text-xl text-orange-400  font my-3 mb-5 bg-">Follow the steps and get your work done!</p>
        <Instructions/>
      <OptionsBar />
      <div className="code-editor-ref mt-10" ref={editorRef}>
        <CodeEditor ref={editorRef} />
      </div>
    </div>
  );
};

export default WorkStation;
