import React from 'react';
import { useSelector } from 'react-redux';

import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { selectProfile } from 'app/store/selectors';

function SocialMedia() {
  const { loading, data } = useSelector(selectProfile);

  const { blog, html_url: url } = data || {};

  return (
    <div className="fixed bottom-0 m-12 flex z-20">
      {loading && <div />}
      {!loading &&
        [
          {
            href: 'mailto:melancholy8914@gmail.com',
            Icon: MdEmail,
          },
          {
            href: url,
            Icon: FaGithub,
          },
          {
            href: blog,
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
