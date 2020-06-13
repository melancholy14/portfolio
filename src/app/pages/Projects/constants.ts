import CrimeMap from 'assets/images/crime-map-main.png';

export const projects = {
  crimeMap: {
    title: 'crime map',
    url: 'https://melancholy14.github.io/react-crime-map',
    image: CrimeMap,
    descriptions: [
      'The React-based crime searching system using a location, criminal types, and a date.',
      'Communicated with UK police (https://data.police.uk) using RESTful API',
      'Applied Leaflet JS for showing the result of search a user tried through a map',
    ],
  },
};

export const experiences = [
  {
    position: 'Web Developer',
    company: 'Innovattic',
    summary:
      'Part of a tech team responsible for developing and building a front-end application.',
    specs: ['React', 'Typescript', 'NodeJS'],
    className: 'w-2/5 p-1/20',
  },
  {
    position: 'Software Development Engineer',
    company: 'Trenbe',
    summary:
      'Led Front-end side of the system as a main front-end developer using React and Redux.',
    specs: ['React', 'Redux', 'AWS'],
    project: {
      title: 'Trenbe.com',
      url: 'https://www.trenbe.com',
      descriptions: [
        'Fashion Tech E-commerce Web Application which built using React, Redux and AWS',
      ],
    },
    className: 'w-2/3 top-8 left-1/3 p-3/33',
  },
  {
    position: 'Web Developer',
    company: 'University of Southampton',
    summary:
      'Developed web interfaces for a project related to changing the platform from desktop-based into web-based; an argumentation-based analytics system.',
    specs: ['D3', 'BackboneJS'],
    className: 'w-12/25 top-84 left-1/50 p-1/14',
  },
];
