import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MdMenu } from 'react-icons/md';

import { selectApp } from 'app/store/selectors';

import SocialMedia from './SocialMedia';
import SideMenu from './SideMenu';

type LayoutsProps = {
  className?: string;
  children: React.ReactNode;
};

function Layouts({ className, children }: LayoutsProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const { bgClassName } = useSelector(selectApp);

  const handleShowMenu = () => setShowMenu(!showMenu);

  return (
    <div
      className={`transition duration-500 text-white ${bgClassName || ''} ${
        className || ''
      }`}
    >
      <div className="container">
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
