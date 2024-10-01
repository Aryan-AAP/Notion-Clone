'use client';

import { CODE_SNIPPETS } from "@/constants/editor";
import Editor from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "@/firebase";
import { useRoom } from "@liveblocks/react/suspense";
import { Button } from "../ui/button";


// Define the type for languages based on CODE_SNIPPETS keys
export type Language = keyof typeof CODE_SNIPPETS;
interface LanguageSelectorProps {
  language: Language;
  onSelect: (language: Language) => void;
}

function CompilerCode() {
  const room = useRoom();
  const [data, loading, error] = useDocumentData(doc(db, "documents", room.id));
  const editorRef = useRef<any>(null);
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<Language>("javascript"); // Default language

  // Update editor value when data changes
  useEffect(() => {
    if (data) {
      setValue(data[language] || CODE_SNIPPETS[language]); // Use data for the current language
    }
  }, [data, language]);

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (lang: string) => {
    setLanguage(lang as Language);
    setValue(CODE_SNIPPETS[lang as Language]);
  };

  return (
    <div className="flex flex-1 flex-col ">
      {/* <Trying /> */}
      <div className="flex  flex-1 flex-col">
        <div className="w-full  ">
          <div 
          className="flex justify-between "
          >
            <div>

          <LanguageSelector language={language} onSelect={onSelect} />
            </div>

          </div>

          <Editor
            options={{
              selectOnLineNumbers: true,
              automaticLayout: true,
              readOnly: false,
              cursorStyle: "line",
              fontSize: 14,
              fontFamily: "'Fira Code', monospace",
              wordWrap: "on",
              wrappingIndent: "indent",
              formatOnType: true,
              formatOnPaste: true,
              minimap: {
                enabled: false,
              },
              scrollBeyondLastLine: false,
              smoothScrolling: true,
              bracketPairColorization: {
                enabled: true
              },
              showFoldingControls: "always",
              codeLens: true,
              folding: true,
              foldingStrategy: "indentation",
              lineNumbers: "on",
              tabSize: 2,
              insertSpaces: true,
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            value={value}
            onMount={onMount}
            onChange={(value) => setValue(value || "")}
          />
        </div>
        <div className="flex-1 ">
          <Output editorRef={editorRef} language={language} />
        </div>
      </div>
    </div>
  );
}

export default CompilerCode;
