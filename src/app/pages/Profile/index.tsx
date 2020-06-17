import React from 'react';

import Container from 'app/layouts/Container';
import { useScrollForBackground } from 'app/hooks/scroll';

import GithubProfile from './GithubProfile';
import Introduction from './Introduction';

function Profile() {
  const { divRef } = useScrollForBackground('bg-red-800');

  return (
    <Container id="about" title="#ABOUT" className="h-4/5-screen">
      <div className="flex" ref={divRef}>
        <div className="w-1/3 p-10 text-center">
          <GithubProfile />
        </div>
        <div className="w-2/3 p-10 xl:text-2xl lg:text-xl md:text-base">
          <Introduction />
        </div>
      </div>
    </Container>
  );
}

export default Profile;
