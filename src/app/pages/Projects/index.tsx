import React from 'react';

import Container from 'app/layouts/Container';
import { useScrollForBackground } from 'app/hooks/scroll';

import projectData from 'assets/projects.json';

import { ProjectType } from './types';

import Project from './Project';

const projects: ProjectType[] = projectData.map(({ image, ...rest }) => ({
  ...rest,
  image: image && require(`assets/images/${image}`),
}));

function Projects() {
  const { divRef } = useScrollForBackground('bg-green-800');

  return (
    <Container
      id="project"
      title="#Personal Project"
      className="mx-auto my-24 xl:my-40"
    >
      <div ref={divRef}>
        {projects.map((project) => (
          <Project key={project.id} data={project} />
        ))}
      </div>
    </Container>
  );
}

export default Projects;
