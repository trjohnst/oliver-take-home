import get from './get';

function getUserPosts(id) {
  return get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
}

export default getUserPosts;