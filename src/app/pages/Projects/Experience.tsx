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
    };
  };
};

function Experience({
  data: { position, company, summary, specs, className, project },
  backgroundClass,
}: ExperienceProps) {
  return (
    <div
      className={`${backgroundClass} rounded-full absolute text-11/12 ${className}`}
    >
      <div className="text-xl">
        <span className="font-semibold">{position}</span>
        <span className="mx-2">|</span>
        <span className="italic">{company}</span>
      </div>
      <div>
        <p>{summary}</p>
        <p className="flex flex-wrap">
          {specs.map((spec) => (
            <span key={spec} className="mx-3 font-bold italic">
              {spec}
            </span>
          ))}
        </p>
      </div>
      {project && <Project data={project} />}
    </div>
  );
}

export default Experience;
