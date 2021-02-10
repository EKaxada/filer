import React, { useState } from "react";
import axios from "axios";

const App = (props) => {
  const [file, setFile] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myfile", file);
    const URL = "https://file-server-side.herokuapp.com/upload";
    axios
      .post(URL, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => alert("file successfully uploaded"))
      .catch((err) => console.error(err));
  };
  return (
    <form onSubmit={onSubmit}>
      <h1>upload your file here</h1>
      <input
        type="file"
        name="file"
        onchange={(e) => setFile(e.target.files)}
      />
      <button type="submit">upload</button>
    </form>
  );
};

export default App;
