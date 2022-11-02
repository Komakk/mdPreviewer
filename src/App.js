import { marked } from "marked";
import { useState } from "react";
import "./App.css";
import data from "./data";

function Editor({ value, onChange }) {
  return (
    <div className="editor">
      <p>Markdown Editor:</p>
      <textarea id="editor" onChange={onChange} value={value}></textarea>
    </div>
  )
}

function Preview({ value }) {
  return (
    <div  className="preview">
      <p>Preview:</p>
      <div id="preview" dangerouslySetInnerHTML={createMarkup(value)}></div>
    </div>
    
  )
}

export default function App() {
  const [input, setInput] = useState(data);
    return (
      <div className="container">
        
        <Editor 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Preview 
          value={input}
          />
      </div>
    );
}

function createMarkup(val) {
  return {__html: marked.parse(val)};
}