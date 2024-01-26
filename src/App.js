import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import './App.css';
import '../node_modules/react-quill/dist/quill.snow.css';

function App() {
  const [body, setBody] = useState("")

  const handleBody = e => {
    console.log(e);
    setBody(e);

  }
  return (
    <div className="App">
      <h1>Text Editor</h1>
      <ReactQuill 
      placeholder='Write Something Amazing...'
      modules={App.modules}
      formats={App.formats}
      onChange={handleBody}
      value={body}
      />
      
    </div>
  );
}

App.modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{  list: "ordered" }, {  list: "bullet" } ],
      ["link", "image", "video"],
      ["clean"],
      ["code-block"],
    ],
};
App.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "ordered",
  "bullet",
  "link",
  "image",
  "video",
  "code-block"
]

export default App;
