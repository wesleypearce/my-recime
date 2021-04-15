import * as React from 'react';

const Profile = ({ user }) => {
  if (user == null) console.log('No user logged in');
  else console.log(user);
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
