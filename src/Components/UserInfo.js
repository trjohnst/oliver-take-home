import React from 'react';

function UserInfo({ user }) {
  const {
    name,
    id,
    email,
    username,
    addressStreet,
    addressSuite,
    addressCity,
    addressZip,
    phone,
  } = user;

  return (
    <div>
      <h2>User info</h2>
      <dl>
        <dt>ID:&nbsp;</dt><dd>{id}</dd>
        <dt>Email:&nbsp;</dt><dd>{email}</dd>
        <dt>Name:&nbsp;</dt><dd>{name}</dd>
        <dt>Username:&nbsp;</dt><dd>{username}</dd>
        <dt>User Address:&nbsp;</dt>
        <dd>
          <div>
            {addressStreet}<br />
            {addressSuite}<br />
            {addressCity}<br />
            {addressZip}<br />
          </div>
        </dd>
        <dt>User Phone:&nbsp;</dt><dd>{phone}</dd>
      </dl>
    </div>
  );
}

export default UserInfo;