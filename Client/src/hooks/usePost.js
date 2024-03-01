import { useReducer } from "react";
import { findAll, save } from "../services/postService";
import { postsReducer } from "../reducers/postsReducer";

const usePost = () => {
  const [allPost, dispatch] = useReducer(postsReducer, []);

  const getAllPosts = async () => {
    const result = await findAll();

    console.log("!!! post request result :", result.data.content);
    console.log("!!! post request result :", result.data);

    dispatch({
      type: "loadingPosts",
      payload: result.data.content,
    });
  };

  const handlerCreatePost = async (post) => {
    let response;

    try {

      if (!post.id) {
        response = await save(post);
      } else {
        response = await update(post);
      }

      dispatch({
        type: post.id === 0 ? "addPost" : "updatePost",
        payload: response.data.content,
      });


    } catch (error) {
      if (error.response) {
        console.log("Post error!!!  ", error.response.data);
        console.log("Post error!!!  ", error);
      }
    }
  };

  return {
    allPost,
    getAllPosts,
    handlerCreatePost
  };
};

export default usePost;
