import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { userClientRoute } from '../Data/ClientRoutes';

function User() {
  let match = useRouteMatch(userClientRoute);

  const { userId } = match.params;

  return <div>User {userId}</div>;
}

export default User;