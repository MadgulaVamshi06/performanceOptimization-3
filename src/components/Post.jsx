
import React, { useCallback } from 'react';
 const Post = ({ post, setPosts }) => {
  const handleVerify = useCallback(() => {
    setPosts((prevPosts) =>
      prevPosts.map((p) =>
        p.id === post.id ? { ...p, verifyPost: !p.verifyPost } : p
      )
    );

  }, [post.id, setPosts]);

  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

  return (
    <div style={{ backgroundColor: randomColor }}>
      <div>
        <h6>{post.title}</h6>
        <p>{post.body}</p>
      </div>
      <button  onClick={handleVerify}>
        {post.verifyPost ? 'Verified' : 'Verify'}
      </button>
    </div>
  );
};

 const Post1 = React.memo(Post)
  
 export {Post1}