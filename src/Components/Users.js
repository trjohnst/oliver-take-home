import React, {
  useState,
  useEffect
} from 'react';
import { useHistory } from "react-router-dom";
import getUsers from '../APICalls/getUsers';
import { buildUserRoute } from '../Data/ClientRoutes';

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

  const history = useHistory();

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
                onClick={() => {
                  const userRoute = buildUserRoute(id);
                  history.push(userRoute);
                }}
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