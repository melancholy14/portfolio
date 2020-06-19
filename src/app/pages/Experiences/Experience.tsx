import React from 'react';

type ExperienceProps = {
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
  data: { position, company, summary, specs, className },
}: ExperienceProps) {
  return (
    <div className={`text-11/12 ${className}`}>
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
    </div>
  );
}

export default Experience;
