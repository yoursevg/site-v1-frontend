import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:1337/api",
})

const getPosts = () =>axiosClient
    .get("posts?populate=*&sort=id")
    .catch(error => console.error('Ошибка при получении объявлений:', error))
const getPostByPostId = (postId: string | null | undefined) => axiosClient
    .get(`posts/${postId}?populate=*`)
    .catch(error => console.error('Ошибка при получении объявления:', error))
const getCategories = () => axiosClient
    .get("categories?populate=*&sort=id")
    .catch(error => console.error('Ошибка при получении категорий:', error))
const getPostsByUserId = (userId: string | null | undefined) => axiosClient
    .get(`posts?populate=*&filters[author][identificator][$eq]=${userId}`)
    .catch(error => console.error('Ошибка при получении объявлений:', error))
const getPostsByCategory = (categoryName: string | null | undefined) => axiosClient
    .get(`posts?populate=*&filters[category][name][$eq]=${categoryName}`)
    .catch(error => console.error('Ошибка при получении объявлений:', error))
const getFavoritesPostsByUserId = (userId: string | null | undefined) => axiosClient
    .get(`posts?populate=*&filters[users_favorites][identificator][$eq]=${userId}`)
    .catch(error => console.error('Ошибка при получении объявлений:', error))
const getUserIdByIdentificator = (identificator: string | undefined) => axiosClient
    .get(`/users?populate=*&filters[identificator][$eq]=${identificator}`)
    .catch(error => console.error('Ошибка при получении пользователя:', error))

const uploadPhoto = (file: File | Blob) => {
    const formData = new FormData();
    formData.append('files', file); // file can no longer be undefined due to the function's type signature

    return axiosClient.post("upload", formData, {
        headers: {
            'Content-Type': 'multipart/form-data', // This header is often necessary for file uploads
        },
    });
}
const deletePhoto = (id: number) => axiosClient
    .delete(`upload/files/${id}`)
    .catch(error => console.error('Ошибка при получении объявлений:', error))
const createPost = (newPost: any) => axiosClient
    .post("posts", {
        data: {...newPost}
    })
    .catch(error => console.error('Ошибка при создании объявления:', error))

const getPostsBySearch = async (searchReq: string | null | undefined) => {
    if (searchReq === "") {
        return getPosts()
    } else {
        try {
            const query = `
      query SearchPosts($searchTerm: String!) {
        search(query: $searchTerm) {
          posts {
            data {
              id
              attributes {
                title
                createdAt
                price
                stock
                location
                description
                condition
                category {
                    data {
                        attributes {
                            name
                        }
                    }
                }
                author {
                  data {
                    attributes {
                      username
                      first_name
                      last_name
                      createdAt
                      identificator
                      profile_image_url
                    }
                  }
                }
                images {
                  data {
                    attributes {
                      url
                      formats
                    }
                  }
                }
                users_favorites {
                  data {
                    attributes {
                      identificator
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

            const variables = {
                searchTerm: searchReq,
            };

            const response = await axiosClient.post('/graphql', {
                query,
                variables,
            }, {
                baseURL: "http://localhost:1337"
            });

            return response.data.data.search;
        } catch (error) {
            console.error('Ошибка при попытке поиска объявлений:', error);
        }
    }
};
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
const findOrCreateRoom = async (userId: number, sellerId: number, token: string | null) => {
    try {
        let response = await axiosClient
            .get(`/rooms?filters[$and][0][users]=${userId}&filters[$and][1][users]=${sellerId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        if (response.data.data.length > 0) {
            // Если комната существует, возвращаем ее
            return response.data.data[0];
        }

        // Если комната не найдена, создаем новую
        response = await axiosClient.post("/rooms", {
            data: {
                users: [userId, sellerId],
            },
        });

        // Возвращаем созданную комнату
        return response.data.data;

    } catch (error) {
        console.error('Ошибка при попытке найти или создать комнату:', error);
        throw error;
    }
};
const getMessages = (roomId: number, token: string | null) => axiosClient
    .get(`/messages?filters[room]=${roomId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .catch(error => console.error('Ошибка при получении сообщений:', error))

// const sendMessage = ({ roomId, content, senderId, token }) => axiosClient
//     .post(`/messages`, {
//         data: {
//             room: roomId, // ID комнаты, в которую отправляется сообщение
//             content: content, // Содержимое сообщения
//             sender: senderId, // ID отправителя сообщения
//         }
//     }, {
//         headers: {
//             'Authorization': `Bearer ${token}`, // Используйте токен для аутентификации запроса
//         }
//     })
//     .then(response => response.data) // Возможно, вы захотите обработать ответ сервера
//     .catch(error => console.error('Ошибка при отправке сообщения:', error));

export default {
    getPosts,
    getPostByPostId,
    getCategories,
    getPostsByUserId,
    uploadPhoto,
    createPost,
    deletePhoto,
    getFavoritesPostsByUserId,
    getPostsByCategory,
    getUserIdByIdentificator,
    getPostsBySearch,
    updateFavoritesByUserAndPostId,
    findOrCreateRoom,
    getMessages,
    // sendMessage
}