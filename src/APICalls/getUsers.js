import get from './get';

function getUsers() {
  return get('https://jsonplaceholder.typicode.com/users');
}

export default getUsers;