import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { userRoute } from '../Data/ClientRoutes';

function User() {
  let match = useRouteMatch(userRoute);

  const { userId } = match.params;

  return <div>User {userId}</div>;
}

export default User;