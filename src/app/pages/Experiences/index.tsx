import React from 'react';

import Container from 'app/layouts/Container';
import { useScrollForBackground } from 'app/hooks/scroll';

import { experiences } from './constants';

import Experience from './Experience';

function Projects() {
  const { divRef } = useScrollForBackground('bg-orange-800');

  return (
    <Container id="work" title="#Work" className="h-4/5-screen">
      <div className="relative flex" ref={divRef}>
        {experiences.map((ex) => {
          return <Experience key={ex.company} data={ex} />;
        })}
      </div>
    </Container>
  );
}

export default Projects;
