import React, { memo } from 'react';

import { Title } from 'app/components';

import { ProjectType } from './types';

type ProjectProps = {
  data: ProjectType;
};

function Project({ data: { title, url, image, descriptions } }: ProjectProps) {
  return (
    <div
      className="shadow-xl p-4 rounded-3xl relative bg-contain bg-fixed"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-white text-black lg:w-1/3 md:w-1/2 p-4 rounded-2xl opacity-75">
        <Title>{title}</Title>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="italic xl:text-xl lg:text-md break-all"
          >
            {url}
          </a>
        )}
        <ul className="p-4 pr-0 list-disc">
          {descriptions.map((desc) => (
            <li key={desc}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default memo(Project);
