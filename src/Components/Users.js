import React, { useState, useEffect } from 'react';
import getUsers from '../APICalls/getUsers';

const navigateToUser = (id) => {
  console.log(`using stub function to navigate to user with id: ${id}`);
}

function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const getUsersResponse = await getUsers();
        const { data } = getUsersResponse;
        setUsers(data);
        setIsLoading(false);
      } catch(error) {
        // TODO: add some response error handling
      }
    }

    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({
            id,
            email,
          }, index) => (
            <tr key={index}>
              <td>{id}</td>
              <td>{email}</td>
              <td
                role="button"
                onClick={() => navigateToUser(id)}
              >
                View
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;