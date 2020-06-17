import React from 'react';

import { Title } from 'app/components';
import Container from 'app/layouts/Container';

import { projects } from './constants';

import Project from './Project';

function Projects() {
  return (
    <Container>
      <Title id="project">#Personal Project</Title>
      <Project data={projects.crimeMap} />
    </Container>
  );
}

export default Projects;
