import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ClockLoader } from 'react-spinners';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { DiJavascript, DiCss3, DiJira, DiLess, DiReact, DiWordpress, DiNodejs } from 'react-icons/di';

import { selectProfile } from '../store/slices/profileSlice';
import { loadGithubProfile } from '../store/thunks';

function Profile() {
  const { loading, data, error } = useSelector(selectProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGithubProfile());
  }, [dispatch]);

  if (error) {
    return (<div>Something went wrong!</div>);
  }
  const {
    avatar_url: avatar,
    name,
    blog,
    html_url: url,
  } = data || {};

  // let loading = true;

  return (
    <div className="h-screen w-full flex p-4">
      <div className="w-1/3 p-10 text-center">
        <div className={`transition duration-700 ease-in-out ${!loading ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <img src={avatar} className="rounded-full mb-12 shadow-xl" alt="avatar" />
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="flex items-center justify-center italic text-xl">
            <MdEmail />
            <span className='ml-2'>melancholy14@hotmail.com</span>
          </p>
          <p className="flex items-center justify-center my-2">
            <a href={url} target="_blank" rel="noopener noreferrer" className="mx-4">
              <FaGithub />
            </a>
            <a href={blog} target="_blank" rel="noopener noreferrer" className="mx-4">
              <FaLinkedin />
            </a>
          </p>
        </div>
      {loading && (<div className="w-40 mx-auto my-20"><ClockLoader size={150} /></div>)}
      </div>
      <div className="w-2/3 p-10 text-2xl">
        <div>
          <p>A well-organised and confident post-grad Software Engineer, looking to pursue a new career in software development.</p>
          <p className="text-3xl">As a software engineer with <span className="font-semibold">React and Redux, Java and AWS</span>, I was in the technical team responsible for <span className="font-semibold italic">offering an e-commerce system</span> for 2 years.</p>
          <p className="text-3xl">Currently, I’m working as a web developer using <span className="font-semibold">React and Typescript</span> in order to build web applications to provide positive effect on society.</p>
        </div>
        <div className="flex items-center justify-start mt-10">
          <DiReact className="w-16 h-16" />
          <DiJavascript className="w-16 h-16" />
          <DiNodejs className="w-16 h-16" />
          <DiCss3 className="w-16 h-16" />
          <DiLess className="w-12 h-12" />
          <DiWordpress className="w-12 h-12" />
          <DiJira className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
