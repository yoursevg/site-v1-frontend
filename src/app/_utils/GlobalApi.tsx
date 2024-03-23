import axios from "axios";

const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API

const axiosClient = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
})

const getPosts = () =>axiosClient
    .get("posts?populate=*&sort=id")
const getCategories = () => axiosClient
    .get("categories?populate=*&sort=id")
const getAdvertisiment = () => axiosClient
    .get("advertisements?populate=*")
const getPostsByUsername = (username: string | null | undefined) => axiosClient
    .get(`posts?populate=*&filters[author][username][$eq]=${username}`)

export default {
    getPosts,
    getCategories,
    getAdvertisiment,
    getPostsByUsername
}