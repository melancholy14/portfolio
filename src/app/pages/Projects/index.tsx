import React from 'react';

import { Title } from 'app/components';
import Container from 'app/layouts/Container';

import { projects, experiences } from './constants';

import Project from './Project';
import Experience from './Experience';

function Projects() {
  return (
    <Container>
      <div className="w-2/3">
        <Title>::Experiences::</Title>
        <div className="relative">
          {experiences.map((ex, index) => {
            const backgroundClass = `bg-red-${
              (experiences.length - index) * 100
            }`;
            return (
              <Experience
                key={ex.company}
                data={ex}
                backgroundClass={backgroundClass}
              />
            );
          })}
        </div>
      </div>
      <div className="w-1/3">
        <Title>::Personal Project::</Title>
        <Project data={projects.crimeMap} />
      </div>
    </Container>
  );
}

export default Projects;
