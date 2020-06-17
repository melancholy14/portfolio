import React, { useState } from 'react';

import { MdMenu } from 'react-icons/md';

import SocialMedia from './SocialMedia';
import SideMenu from './SideMenu';

type LayoutsProps = {
  className?: string;
  children: React.ReactNode;
};

function Layouts({ className, children }: LayoutsProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = () => setShowMenu(!showMenu);

  return (
    <div className={`${className || ''}`}>
      <div className="xl:mx-5/33">
        <button
          type="button"
          className="fixed top-0 m-12 z-20"
          onClick={handleShowMenu}
        >
          <MdMenu size="3rem" />
        </button>
        {children}
        <SocialMedia />
      </div>
      <SideMenu show={showMenu} onClose={handleShowMenu} />
    </div>
  );
}

export default Layouts;
