import React, { useState } from "react";
import axios from "axios";

const NewPost = ({ postData }) => {
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const onSubmit = () => {
    console.log({
      id,
      title,
      body,
    });

    axios
      .post("http://localhost:3002/post", { id, title, body })
      .then((response) => {
        postData(response);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button style={{ marginTop: "4px" }} onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default NewPost;
