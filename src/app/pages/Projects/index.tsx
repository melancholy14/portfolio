import React from 'react';

import Container from 'app/layouts/Container';

import { projects } from './constants';

import Project from './Project';

function Projects() {
  return (
    <Container id="project" title="#Personal Project">
      <Project data={projects.crimeMap} />
    </Container>
  );
}

export default Projects;
