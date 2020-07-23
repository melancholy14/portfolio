import React, { useState, useEffect } from 'react';

import Container from 'app/layouts/Container';
import { useScrollForBackground } from 'app/hooks/scroll';

import experiences from 'assets/experiences.json';

import { ExperienceType } from './types';

import Experience from './Experience';

const DEFAULT_COLUMN_NUM = 2;

function Experiences() {
  const [columnNum, setColumnNum] = useState<number>(DEFAULT_COLUMN_NUM);
  const [experienceTables, setExperienceTables] = useState<ExperienceType[][]>(
    []
  );

  const { divRef } = useScrollForBackground('bg-orange-800');

  useEffect(() => {
    const smallDeviceWidth = 1024;

    if (window.innerWidth <= smallDeviceWidth) {
      setColumnNum(1);
    }

    const handleResize = () => {
      let newColumnNum = DEFAULT_COLUMN_NUM;
      if (window.innerWidth <= smallDeviceWidth) {
        newColumnNum = 1;
      } else {
        newColumnNum = 2;
      }

      setColumnNum(newColumnNum);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const newExperienceTables: ExperienceType[][] = [];
    experiences.forEach((exp, index) => {
      const rest = index % columnNum;

      newExperienceTables[rest] = newExperienceTables[rest]
        ? [...newExperienceTables[rest], exp]
        : [exp];
    });

    setExperienceTables(newExperienceTables);
  }, [columnNum]);

  return (
    <Container
      id="skills-experience"
      title="#Skill &amp; Experience"
      className="mx-auto my-24 xl:my-40"
    >
      <div className="flex flex-col md:flex-row" ref={divRef}>
        <div className="text-base md:text-lg lg:text-xl flex flex-col justify-center my-4 md:w-1/2 xl:w-1/3">
          <p className="mb-3">
            My main area is{' '}
            <span className="text-orange-300 font-semibold">
              the frontend development of the web
            </span>
            .
          </p>
          <p className="mb-3">
            React, Javascript / Typescript, CSS Frameworks like TailwindCSS,
            NodeJS and so on.
          </p>
          <p>
            In addition, I have many full-stack experiences with Spring Boot and
            jQuery.
          </p>
        </div>
        <div className="relative flex lg:w-2/3">
          {experienceTables.map((columns) => (
            <div
              key={columns[0].company}
              className="flex flex-col"
              style={{ width: `calc(100%/${experienceTables.length})` }}
            >
              {columns.map((exp) => (
                <Experience key={exp.company} data={exp} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Experiences;
