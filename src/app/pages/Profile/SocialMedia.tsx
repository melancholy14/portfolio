import React from 'react';

import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { useAppSelector } from 'app/store';
import { selectProfile } from 'app/store/selectors';

type SocialMediaProps = {
  className: string;
  iconClassName?: string;
};

function SocialMedia({ className, iconClassName }: SocialMediaProps) {
  const { loading, data } = useAppSelector(selectProfile);

  const { blog, html_url: url } = data || {};

  return (
    <div className={className}>
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
            className={iconClassName}
          >
            <Icon size="2rem" />
          </a>
        ))}
    </div>
  );
}

export default SocialMedia;
