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
    .catch(error => console.error('Ошибка при получении объявлений:', error))
const getCategories = () => axiosClient
    .get("categories?populate=*&sort=id")
    .catch(error => console.error('Ошибка при получении категорий:', error))
const getPostsByUserId = (userId: string | null | undefined) => axiosClient
    .get(`posts?populate=*&filters[author][identificator][$eq]=${userId}`)
    .catch(error => console.error('Ошибка при получении объявлений:', error))
const getFavoritesPostsByUserId = (userId: string | null | undefined) => axiosClient
    .get(`posts?populate=*&filters[users_favorites][identificator][$eq]=${userId}`)
    .catch(error => console.error('Ошибка при получении объявлений:', error))

const updateFavoritesByUserAndPostId = async (postId: number, userId: string | null | undefined) => {
    try {
        const res = await axiosClient.get(`posts/${postId}?populate=users_favorites`);
        console.log(res)
        const currentFavorites = res.data.data.attributes.users_favorites.data;

        // Удаляем пользователя из списка
        const updatedFavorites = currentFavorites
            .filter((user: { attributes: { identificator: string | null | undefined; }; }) => {
                return user.attributes.identificator !== userId
            });
        console.log(updatedFavorites)
        // Обновляем пост с новым списком избранных
        const updateResponse = await axiosClient.put(`/posts/${postId}`, {
            data: {
                users_favorites: updatedFavorites,
            },
        });

        console.log('Объявление удалено из избранных', updateResponse);
    } catch (error) {
        console.error('Ошибка при обновлении объявления:', error);
    }
};

export default {
    getPosts,
    getCategories,
    getPostsByUserId,
    getFavoritesPostsByUserId,
    updateFavoritesByUserAndPostId
}