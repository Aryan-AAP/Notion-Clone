"use client";
import { useRoom } from "@liveblocks/react/suspense";
import { useState } from "react";
import axios from "axios";
import { CODE_SNIPPETS } from "@/constants/editor";
import { db } from "@/firebase";
import { addthecodeintoroom } from "@/actions/action";
type lol = keyof typeof CODE_SNIPPETS;

const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

const executeCode = async (language: lol, sourceCode: string) => {

  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};

interface OutputProps {
  editorRef: React.RefObject<any>;
  language: lol;
}

const Output: React.FC<OutputProps> = ({ editorRef, language }) => {
  const [output, setOutput] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const room=useRoom()

  const runCode = async (language: lol) => {
    const sourceCode = editorRef.current?.getValue();
    if (!sourceCode) return;
console.log(language);

    await addthecodeintoroom(sourceCode,room?.id as string,language)


    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      setIsError(!!result.stderr);
    } catch (error: any) {
      console.log(error);
      alert(error.message || "Unable to run code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-1/2">
      <p className="mb-2 text-lg">Output</p>
      <button
        className={`mb-4 px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={()=>runCode(language)}
        disabled={isLoading}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button>
      <div
        className={`h-[75vh] p-2 border rounded ${
          isError ? "text-red-400 border-red-500" : "border-gray-800"
        }`}
      >
        {output
          ? output.map((line, i) => <p key={i}>{line}</p>)
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

export default Output;
