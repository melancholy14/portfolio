import React, { useState } from 'react';

import { Title } from 'app/components';

type ProjectProps = {
  data: {
    title: string;
    url?: string;
    image?: string;
    descriptions: string[];
  };
};

function Project({ data: { title, url, image, descriptions } }: ProjectProps) {
  const [shadow, setShadow] = useState(false);

  const showShadow = () => setShadow(true);

  const hiddenShadow = () => setShadow(false);

  return (
    <div
      className={`${shadow ? 'shadow-2xl' : ''} p-4 rounded-3xl`}
      onMouseOver={showShadow}
      onMouseLeave={hiddenShadow}
    >
      <Title className="uppercase">{title}</Title>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="italic text-xl"
        >
          {url}
        </a>
      )}
      <ul className="p-4 pr-0 list-disc">
        {descriptions.map((desc) => (
          <li key={desc}>{desc}</li>
        ))}
      </ul>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-4/5 m-auto rounded shadow-md"
        />
      )}
    </div>
  );
}

export default Project;
