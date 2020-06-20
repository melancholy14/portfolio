import React from 'react';

import Container from 'app/layouts/Container';
import { useScrollForBackground } from 'app/hooks/scroll';

import experiences from 'assets/experiences.json';

import { ExperienceType } from './types';
import Experience from './Experience';

function Experiences() {
  const { divRef } = useScrollForBackground('bg-orange-800');

  const experienceTables: ExperienceType[][] = [];

  experiences.forEach((exp, index) => {
    if (index % 3 === 0) {
      experienceTables[0] = experienceTables[0]
        ? [...experienceTables[0], exp]
        : [exp];
    } else if (index % 3 === 1) {
      experienceTables[1] = experienceTables[1]
        ? [...experienceTables[1], exp]
        : [exp];
    } else if (index % 3 === 2) {
      experienceTables[2] = experienceTables[2]
        ? [...experienceTables[2], exp]
        : [exp];
    }
  });

  return (
    <Container id="work" title="#Work" className="h-screen-4/5">
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
