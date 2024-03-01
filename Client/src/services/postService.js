import axios from "axios";

const DB_URL = "http://localhost:8080/post";

export const findAll = async () => {
  try {
    return await axios.get(`${DB_URL}/getall`);
  } catch (e) {
    console.error("Ops... we can't get post!");
  }

  return null;
};

export const save = async (post) => {
  try {
    // must return an object

    return await axios.post(`${DB_URL}/create`, post);


  } catch (e) {
    throw e;
  }
};

export const update = async (newPost, id) => {
  try {
    return await axios.put(`${DB_URL}/updateFields/${id}`, newPost);
  } catch (e) {
    throw e;
  }
};

export const remove = async (id) => {
  try {
    await axios.delete(`${DB_URL}/delete/${id}`);
  } catch (e) {
    throw e;
  }
  return undefined;
};
