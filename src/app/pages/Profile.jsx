import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ClockLoader } from 'react-spinners';

import { selectProfile } from '../store/slices/profileSlice';
import { loadGithubProfile } from '../store/thunks';

function Profile() {
  const { loading, data, error } = useSelector(selectProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGithubProfile());
  }, [dispatch]);

  if (loading) {
    return (<div><ClockLoader /></div>)
  }

  if (error) {
    return (<div>Something went wrong!</div>);
  }
  const {
    avatar_url: avatar,
    name,
    blog,
    html_url: url,
  } = data || {};

  return (
    <div className="h-screen w-full flex">
      <div className="w-1/2">
        <img src={avatar} className="rounded-full" alt="avatar" />
        <h3>{name}</h3>
        <p>
          <span>melancholy14@hotmail.com</span>
        </p>
        <p><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
        <p><a href={blog} target="_blank" rel="noopener noreferrer">{blog}</a></p>
      </div>
      <div className="w-1/2">
        <p>
          A well-organised and confident post-grad Software Engineer, looking to pursue a new career in software development. As a software engineer with React and Redux, Java and AWS, I was in the technical team responsible for offering an e-commerce system for 2 years. Currently, I’m working as a web developer using React and Typescript in order to build web applications to positive effect on society.
        </p>
      </div>
    </div>
  );
}

export default Profile;
