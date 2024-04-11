import { app } from "./axios-config";

export const getSuperHeros = () => {
    return app.get('/super-heros');
}

export const getFriends = () => {
    return app.get('/friends');
}

// export const getSuperHeroById = (id) => {
//     return app.get(`/super-heros/${id}`)
// }

export const getSuperHeroById = ({ queryKey }) => {
    const heroId = queryKey[1];
    return app.get(`/super-heros/${heroId}`)
}

export const addSuperHero = (hero) => {
    return app.post('/super-heros', hero);
}

export const getFriendById = ({ queryKey }) => {
    const friendId = queryKey[1];
    return app.get(`/super-heros/${friendId}`)
}

export const getUserByEmail = (email) => {
    return app.get(`/users/${email}`);
}

export const getCoursesByChannelId = (channelId) => {
    return app.get(`/channels/${channelId}`);
}

export const getColors = (limit, pageNo) => {
    return app.get(`/colors?_limit=${limit}&_page=${pageNo}`);
}

export const getAllColors = () => {
    return app.get(`/colors`);
}

export const getColorsInfiniteQuery = ({ pageParam = 1 }) => {
    return app.get(`/colors?_limit=2&_page=${pageParam}`);
}

