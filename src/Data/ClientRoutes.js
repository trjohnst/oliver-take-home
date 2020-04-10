export const buildUserRoute = (userId) => `/user/${userId}`;

export const usersClientRoute = '/users';
export const userClientRoute = buildUserRoute(':userId');