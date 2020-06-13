import React, { useState } from 'react';

import { MdMenu, MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Modal } from 'app/components';

type LayoutsProps = {
  className?: string;
  children: React.ReactNode;
};

function Layouts({ className, children }: LayoutsProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = () => setShowMenu(!showMenu);

  return (
    <div className={`${className || ''}`}>
      <div className="p-4 xl:mx-5/33">
        <button
          type="button"
          className="fixed top-0 m-12"
          onClick={handleShowMenu}
        >
          <MdMenu size="3rem" />
        </button>
        {children}
        <div className="fixed bottom-0 m-12 flex">
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
      </div>
      <Modal show={showMenu} onClose={handleShowMenu}>
        <div className="flex flex-col">
          {['work', 'project', 'about'].map((text) => (
            <a
              key={text}
              href={`#${text}`}
              className="uppercase text-6xl m-8"
            >{`#${text}`}</a>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default Layouts;
