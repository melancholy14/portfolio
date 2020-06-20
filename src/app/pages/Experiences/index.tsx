import React, { useState, useEffect } from 'react';

import Container from 'app/layouts/Container';
import { useScrollForBackground } from 'app/hooks/scroll';

import experiences from 'assets/experiences.json';

import { ExperienceType } from './types';
import Experience from './Experience';

function Experiences() {
  const [columnNum, setColumnNum] = useState<number>(2);
  const [experienceTables, setExperienceTables] = useState<ExperienceType[][]>(
    []
  );

  const { divRef } = useScrollForBackground('bg-orange-800');

  useEffect(() => {
    if (window.innerWidth <= 640) {
      setColumnNum(1);
    }

    const handleResize = () => {
      let newColumnNum = columnNum;
      if (window.innerWidth <= 640) {
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
    <Container id="work" title="#Work" className="mx-auto my-24 xl:my-40">
      <div className="relative flex" ref={divRef}>
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
    </Container>
  );
}

export default Experiences;
