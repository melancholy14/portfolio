import React from 'react';

import { Title } from 'app/components';
import Container from 'app/layouts/Container';

import { experiences } from './constants';

import Experience from './Experience';

function Projects() {
  return (
    <Container>
      <Title id="experience">#Experiences</Title>
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
    </Container>
  );
}

export default Projects;
