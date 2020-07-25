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
import { FaAws } from 'react-icons/fa';

function Skill() {
  const iconClassName = 'w-12 h-12';

  return (
    <div className="text-base md:text-lg lg:text-xl flex flex-col justify-center my-4 xl:w-1/3">
      <p className="mb-3">
        My main area is{' '}
        <span className="text-orange-300 font-semibold">
          the frontend development of the web
        </span>
        .
      </p>
      <p className="mb-3">
        <span className="font-sriracha font-bold">
          React, Javascript, CSS Frameworks such as TailwindCSS, jQuery
        </span>{' '}
        and so on.
      </p>
      <p className="mb-6">
        In addition, I have many full-stack experiences with{' '}
        <span className="font-sriracha font-bold">
          NodeJS, Spring Boot and WordPress
        </span>
        .
      </p>
      <div className="flex items-center justify-start">
        <DiReact className={iconClassName} />
        <DiJavascript className={iconClassName} />
        <DiNodejs className={iconClassName} />
        <DiCss3 className={iconClassName} />
        <DiLess className={iconClassName} />
        <DiWordpress className={iconClassName} />
        <DiJira className={iconClassName} />
        <FaAws className={iconClassName} />
      </div>
    </div>
  );
}

export default Skill;
