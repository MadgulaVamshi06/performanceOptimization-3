import "./App.css";
import React, { useState, useEffect, useMemo } from "react";
import { Post1 } from "./components/Post";

function App() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [posts, setPosts] = useState([]);
  const [postInput, setPostInput] = useState({
    id: 1,
    title: "",
    body: "",
    verifyPost: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostInput({
      ...postInput,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const newPost = {
      id: postInput.id,
      title: postInput.title,
      body: postInput.body,
      verifyPost: postInput.verifyPost,
    };
    setPosts([...posts, newPost]);
    setPostInput({
      id: postInput.id + 1,
      title: "",
      body: "",
      verifyPost: false,
    });
  };

  const memoizedPosts = useMemo(() => posts, [posts]);

  return (
    <div>
      <div>Timer: {timer}</div>
      <div>
        <input
          placeholder="Enter post title"
          name="title"
          value={postInput.title}
          onChange={handleChange}
        />
        <br />
        <textarea
          placeholder="Enter post body"
          name="body"
          value={postInput.body}
          onChange={handleChange}
        ></textarea>
        <br />
        <button data-testid="add-post-button" onClick={handleSubmit}>
          Add Post
        </button>
      </div>

      <hr />
      <h1>Posts</h1>
      <div>
        {memoizedPosts.map((post) => (
          <Post1 key={post.id} post={post} setPosts={setPosts} />
        ))}
      </div>
    </div>
  );
}

export default App;
