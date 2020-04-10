import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { userClientRoute } from '../Data/ClientRoutes';
import getUser from '../APICalls/getUser';

import UserInfo from './UserInfo';

function User() {
  const match = useRouteMatch(userClientRoute);
  const { userId } = match.params;

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    name: '',
    id: '',
    email: '',
    username: '',
    addressStreet: '',
    addressSuite: '',
    addressCity: '',
    addressZip: '',
    phone: '',
  });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const getUserResponse = await getUser(userId);
        const { data } = getUserResponse;
        const {
          id,
          name,
          email,
          username,
          address,
          phone,
        } = data;
        setUser({
          id,
          name,
          email,
          username,
          addressStreet: address.street,
          addressSuite: address.suite,
          addressCity: address.city,
          addressZip: address.zipcode,
          phone,
        });
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
    <div>
      <h1>{user.name}</h1>
      <UserInfo user={user} />
    </div>
  );
}

export default User;