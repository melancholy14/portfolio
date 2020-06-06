import React, { useEffect, useState } from 'react';

import { DiJavascript, DiCss3, DiJira, DiLess, DiReact, DiWordpress, DiNodejs } from 'react-icons/di';

function Introduction() {
  const [bigIconSize, setBigIconSize] = useState(16);

  useEffect(() => {
    const scroll = () => {
      const { scrollY, innerHeight } = window;

      const devided = innerHeight / 8;

      if (scrollY <= devided) {
        setBigIconSize(17);
      } else if (scrollY <= devided * 2) {
        setBigIconSize(18);
      } else if (scrollY <= devided * 3) {
        setBigIconSize(19);
      } else if (scrollY <= devided * 4) {
        setBigIconSize(20);
      }
    }

    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    }
  }, []);

  const makeClassName = (size: string) => `transition-width duration-200 ${size === 'big' ? `w-${bigIconSize} h-${bigIconSize}` : `w-${bigIconSize - 4} h-${bigIconSize - 4}`}`

  return (
    <div>
      <div>
          <p>A well-organised and confident post-grad Software Engineer, looking to pursue a new career in software development.</p>
          <p className="text-3xl">As a software engineer with <span className="font-semibold">React and Redux, Java and AWS</span>, I was in the technical team responsible for <span className="font-semibold italic">offering an e-commerce system</span> for 2 years.</p>
          <p className="text-3xl">Currently, I’m working as a web developer using <span className="font-semibold">React and Typescript</span> in order to build web applications to provide positive effect on society.</p>
        </div>
        <div className="flex items-center justify-start mt-10">
          <DiReact className={makeClassName('big')} />
          <DiJavascript className={makeClassName('big')} />
          <DiNodejs className={makeClassName('big')} />
          <DiCss3 className={makeClassName('big')} />
          <DiLess className={makeClassName('small')} />
          <DiWordpress className={makeClassName('small')} />
          <DiJira className={makeClassName('small')} />
        </div>
    </div>
  );
}

export default Introduction;
