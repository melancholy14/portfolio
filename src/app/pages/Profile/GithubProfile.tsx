import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ClockLoader } from 'react-spinners';

import { selectProfile } from 'app/store/selectors';
import { loadGithubProfile } from 'app/store/thunks';
import { Title } from 'app/components';
import SocialMedia from './SocialMedia';

function GithubProfile() {
  const { loading, data, error } = useSelector(selectProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGithubProfile());
  }, [dispatch]);

  if (error) {
    return <div>Something went wrong!</div>;
  }

  const { avatar_url: avatar, name } = data || {};

  return (
    <>
      <div
        className={`transition duration-700 ease-in-out ${
          !loading ? 'opacity-100' : 'opacity-0 hidden'
        }`}
      >
        <img
          src={avatar}
          className="rounded-full mb-12 shadow-xl"
          alt="avatar"
        />
        <Title className="xl:text-5xl">{name}</Title>
        <p className="flex items-center justify-center italic text-xl md:hidden">
          <span className="ml-2">melancholy14@hotmail.com</span>
        </p>
        <SocialMedia
          className="flex items-center justify-center my-2 md:hidden"
          iconClassName="mx-4"
        />
      </div>
      {loading && (
        <div className="w-40 mx-auto my-20">
          <ClockLoader size={150} />
        </div>
      )}
    </>
  );
}

export default GithubProfile;
