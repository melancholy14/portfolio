import React from 'react';
import Project from './Project';

type ExperienceProps = {
  backgroundClass: string;
  data: {
    position: string;
    company: string;
    summary: string;
    specs: string[];
    className?: string;
    project?: {
      title: string;
      url?: string;
      descriptions: string[];
    }
  }
}

function Experience({
  data: {
    position, company, summary, specs, className, project
  },
  backgroundClass,
 }: ExperienceProps) {
  // mx-3 my-4 pb-4 border-b border-gray-900
  return (
    <div className={`${backgroundClass} rounded-full p-16 w-84 absolute ${className}`}>
      <div className="text-xl">
        <span className="font-semibold">{position}</span>
        <span className="mx-2">|</span>
        <span className="italic">{company}</span>
      </div>
      <div>
        <p>{summary}</p>
        <p>
          {specs.map((spec) => <span key={spec} className="mx-3 font-bold italic">{spec}</span>)}
        </p>
      </div>
      { project && <Project data={project} />}
    </div>
  );
}

export default Experience;
