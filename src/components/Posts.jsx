import React from "react";
import { PostList } from "../PostList";
import Post from "./Post";

const Posts = () => {
  return (
    <div>
      {PostList.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};

export default Posts;
