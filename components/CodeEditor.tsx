import React from "react";

interface CodeEditorProps {
  code: string;
  onChange: (newCode: string) => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
  return (
    <div className="code-editor-container">
      <textarea
        className="code-editor-textarea"
        value={code}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        placeholder="Paste or edit HTML/CSS here..."
      />
    </div>
  );
};
