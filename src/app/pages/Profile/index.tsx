import React from 'react';

import Container from 'app/layouts/Container';

import GithubProfile from './GithubProfile';
import Introduction from './Introduction';

function Profile() {
  return (
    <Container id="about" title="#ABOUT">
      <div className="flex">
        <div className="w-1/3 p-10 text-center">
          <GithubProfile />
        </div>
        <div className="w-2/3 p-10 text-2xl">
          <Introduction />
        </div>
      </div>
    </Container>
  );
}

export default Profile;
