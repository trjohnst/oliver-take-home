import React, { Fragment, useState, useEffect } from 'react';
import getUserPosts from '../APICalls/getUserPosts';

import UserInfo from './UserInfo';

function UserPosts({ userId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const getUserResponse = await getUserPosts(userId);
        const { data } = getUserResponse;
        setUserPosts(data);
        setIsLoading(false);
      } catch(error) {
        // TODO: add some response error handling
      }
    }

    fetchUsers();
  }, [userId]);

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <Fragment>
      <h2>User Posts</h2>
      <table>
        <tbody>
          {userPosts.map(({
            title,
            body,
            id
          }, index) => (
            <tr key={index}>
              <td>
                <span><strong>{title}:&nbsp;</strong>{body}</span>
              </td>
              <td>
                <button
                  onClick={() => alert(`dummy post delete for post: ${id}`)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default UserPosts;