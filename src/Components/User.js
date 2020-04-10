import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { userClientRoute } from '../Data/ClientRoutes';
import getUser from '../APICalls/getUser';

function User() {
  const match = useRouteMatch(userClientRoute);
  const { userId } = match.params;

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    name: '',
  });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const getUserResponse = await getUser(userId);
        const { data } = getUserResponse;
        setUser(data);
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

  return <div>{user.name}</div>;
}

export default User;