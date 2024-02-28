import { api } from "configs/api";

const getProfile = () => {
    return api.get("user/whoami").then((res) => res || false)
}

const getPosts = () => api.get("post/my")

const getAllPosts = () => api.get("")


export { getProfile, getPosts ,getAllPosts}