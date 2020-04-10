import get from './get';

function getUser(id) {
  return get(`https://jsonplaceholder.typicode.com/users/${id}`);
}

export default getUser;