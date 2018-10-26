import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  // although fetching data this way works, it looks like if we change the state anywhere else, it'll re-render and get fetch the data again
  useEffect(
    async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      // seems like just doing [posts] doesn't work because it's nested data?
    },
    [posts.length]
  );

  return (
    <div className="post-container">
      {posts.map((post, index) => (
        <div onClick={() => setPosts(posts.splice(index, 1))}>
          <h5>{post.title}</h5>
        </div>
      ))}
    </div>
  );
};
export default Posts;
