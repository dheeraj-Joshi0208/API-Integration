import { useEffect, useState } from "react";
import "./App.css";
import { fetchPosts } from "../auth/api";

function App() {
  const [post, setPost] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetchPosts();
      setPost(response);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="card-container">
        {post.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.images[0]} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.body || item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
