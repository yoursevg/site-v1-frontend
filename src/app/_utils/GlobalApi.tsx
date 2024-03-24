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

const updateFavoritesByUserAndPostId = async (postId: number, userIdentificator: string | null | undefined) => {
    try {
        const usersResponse = await axiosClient.get(`/users?filters[identificator][$eq]=${userIdentificator}`);
        console.log(usersResponse)
        const userId = usersResponse.data.length > 0 ? usersResponse.data[0].id : null;
        if (!userId) {
            console.log('Пользователь не найден');
            return;
        }

        const res = await axiosClient.get(`/posts/${postId}?populate=users_favorites`);
        const currentFavorites = res.data.data.attributes.users_favorites.data;

        const isFavorite = currentFavorites.some((user: { id: any; }) => user.id === userId);

        let updatedFavorites;
        if (isFavorite) {
            // Если пользователь уже в избранном, удаляем его
            updatedFavorites = currentFavorites.filter((user: { id: any; }) => user.id !== userId);
        } else {
            // Если пользователя нет в избранном, добавляем его
            updatedFavorites = [...currentFavorites, {id: userId}];
        }

        // Обновляем пост с новым списком избранных
        const updateResponse = await axiosClient.put(`/posts/${postId}`, {
            data: {
                users_favorites: updatedFavorites,
            },
        });

        console.log('Изменения в избранных сохранены', updateResponse);
    } catch (error) {
        console.error('Ошибка при обновлении списка избранных:', error);
    }
};


export default {
    getPosts,
    getCategories,
    getPostsByUserId,
    getFavoritesPostsByUserId,
    updateFavoritesByUserAndPostId
}