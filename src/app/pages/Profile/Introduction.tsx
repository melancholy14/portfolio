import React from 'react';

import {
  DiJavascript,
  DiCss3,
  DiJira,
  DiLess,
  DiReact,
  DiWordpress,
  DiNodejs,
} from 'react-icons/di';

function Introduction() {
  return (
    <div>
      <div>
        <p>
          A well-organised and confident post-grad Software Engineer, looking to
          pursue a new career in software development.
        </p>
        <hr className="border-red-300 m-6" />
        <p className="xl:text-3xl lg:text-xl md:text-md">
          As a software engineer with{' '}
          <span className="font-semibold">React and Redux, Java and AWS</span>,
          I was in the technical team responsible for{' '}
          <span className="font-semibold italic">
            offering an e-commerce system
          </span>{' '}
          for 2 years.
        </p>
        <hr className="border-red-300 m-6" />
        <p className="xl:text-3xl lg:text-xl md:text-md">
          Currently, I’m working as a web developer using{' '}
          <span className="font-semibold">React and Typescript</span> in order
          to build web applications to provide positive effect on society.
        </p>
      </div>
      <div className="flex items-center justify-start mt-10">
        <DiReact className={'transition-width duration-200 w-20 h-20'} />
        <DiJavascript className={'transition-width duration-200 w-20 h-20'} />
        <DiNodejs className={'transition-width duration-200 w-20 h-20'} />
        <DiCss3 className={'transition-width duration-200 w-20 h-20'} />
        <DiLess className="transition-width duration-200 w-20 h-20" />
        <DiWordpress className="transition-width duration-200 w-20 h-20" />
        <DiJira className="transition-width duration-200 w-20 h-20" />
      </div>
    </div>
  );
}

export default Introduction;
