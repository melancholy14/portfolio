import React from 'react';

import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function SocialMedia() {
  return (
    <div className="fixed bottom-0 m-12 flex z-20">
      {[
        {
          href: 'mailto:melancholy8914@gmail.com',
          Icon: MdEmail,
        },
        {
          href: 'https://github.com/users/melancholy14',
          Icon: FaGithub,
        },
        {
          href: 'https://www.linkedin.com/in/melancholy14/',
          Icon: FaLinkedin,
        },
      ].map(({ href, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          <Icon size="2rem" />
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
