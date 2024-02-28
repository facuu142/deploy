import { save } from "../services/postService";

const usePost = () => {
  const handlerCreatePost = async (post) => {
    let response;
    try {
      response = await save(post);

      console.log("Post Status!!!", response.status);
    } catch (error) {
      if (error.response) {
        console.log("Post error!!!  ", error.response.data);
        console.log("Post error!!!  ", error);
      }
    }
  };

  return {
    handlerCreatePost,
  };
};

export default usePost;
