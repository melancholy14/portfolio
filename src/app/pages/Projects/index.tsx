import React from 'react';

import Container from 'app/layouts/Container';
import { useScrollForBackground } from 'app/hooks/scroll';

import { projects } from './constants';

import Project from './Project';

function Projects() {
  const { divRef } = useScrollForBackground('bg-green-800');

  return (
    <Container id="project" title="#Personal Project" className="h-4/5-screen">
      <div ref={divRef}>
        <Project data={projects.crimeMap} />
      </div>
    </Container>
  );
}

export default Projects;
