import { useState, useEffect, useMemo } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        console.log(e);
      }
    };

    getPosts();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  function changePage() {
    // implement this function
  }

  return (
    <>
      {/* the posts shown here should be different for each page */}
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pageNumber) => (
        <button key={pageNumber} onClick={() => changePage(pageNumber)}>
          {pageNumber}
        </button>
      ))}
    </>
  );
}

export default App;
