import React from 'react';

import Container from 'app/layouts/Container';
import { useScrollForBackground } from 'app/hooks/scroll';

import GithubProfile from './GithubProfile';
import Introduction from './Introduction';

function Profile() {
  const { divRef } = useScrollForBackground('bg-red-600');

  return (
    <Container
      id="about"
      title="#ABOUT"
      className="mx-auto mt-24 pb-12 xl:mt-40 xl:pb-20"
    >
      <div className="flex flex-col md:flex-row" ref={divRef}>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 lg:p-10 text-center">
          <GithubProfile />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 p-4 lg:p-10 text-base xl:text-2xl lg:text-xl">
          <Introduction />
        </div>
      </div>
    </Container>
  );
}

export default Profile;
