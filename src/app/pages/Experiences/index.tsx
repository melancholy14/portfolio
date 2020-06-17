import React from 'react';

import Container from 'app/layouts/Container';

import { experiences } from './constants';

import Experience from './Experience';

function Projects() {
  return (
    <Container id="experience" title="#Experiences">
      <div className="relative flex">
        {experiences.map((ex) => {
          return <Experience key={ex.company} data={ex} />;
        })}
      </div>
    </Container>
  );
}

export default Projects;
