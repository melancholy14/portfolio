import React, { useState } from 'react';
import { ExperienceType } from './types';

type ExperienceProps = {
  data: ExperienceType;
};

function Experience({
  data: { position, company, summary, achievement, specs },
}: ExperienceProps) {
  const [isHover, setHover] = useState<boolean>(false);

  return (
    <div
      className={`bg-white text-black m-4 p-4 rounded-3xl ${
        isHover ? 'shadow-inner border-8' : 'shadow-2xl border-4'
      } border-red-400`}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="text-xl">
        <span className="font-semibold">{position}</span>
        <span className="mx-2">|</span>
        <span className="italic">{company}</span>
      </div>
      <hr className="border-red-500 my-3 mx-2" />
      <div>
        <p>{summary}</p>
        <p className="italic">{achievement}</p>
      </div>
      <hr className="border-red-500 my-3 mx-2" />
      <div>
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
