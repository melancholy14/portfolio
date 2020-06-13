import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ClockLoader } from 'react-spinners';

import { selectProfile } from 'app/store/selectors';
import { loadGithubProfile } from 'app/store/thunks';
import { Title } from 'app/components';

function GithubProfile() {
  const { loading, data, error } = useSelector(selectProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGithubProfile());
  }, [dispatch]);

  if (error) {
    return <div>Something went wrong!</div>;
  }

  const { avatar_url: avatar, name, blog, html_url: url } = data || {};

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
        <Title className="text-5xl">{name}</Title>
        <p className="flex items-center justify-center italic text-xl">
          <span className="w-6">
            <MdEmail />
          </span>
          <span className="ml-2">melancholy14@hotmail.com</span>
        </p>
        <p className="flex items-center justify-center my-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <FaGithub />
          </a>
          <a
            href={blog}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <FaLinkedin />
          </a>
        </p>
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
