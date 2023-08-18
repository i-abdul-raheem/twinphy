import { useState } from "react";
import { CreatePost } from "./CreatePost";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./style.css";
import { handleAddPost, handleGetPosts } from "../../api/post";

export const CreatePostWrapper = () => {
  const [text, setText] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const handlePost = () => {
    // handleGetPosts();
    handleAddPost(text, mediaUrl);

  };
  console.log(text);
  return (
    <>
      <Header handlePost={handlePost} />
      <CreatePost setText={setText} />
      <Footer setMediaUrl={setMediaUrl} mediaUrl={mediaUrl} />
    </>
  );
};
