import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { MdMenu } from 'react-icons/md';

import { selectApp } from 'app/store/selectors';

import SocialMedia from 'app/pages/Profile/SocialMedia';

import SideMenu from './SideMenu';
import Language from './Language';

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
      className={`transition duration-500 text-white font-mono
      ${bgClassName || ''}
      ${className || ''}`}
    >
      <div className="container">
        <button
          type="button"
          className="fixed top-0 left-0 m-4 lg:m-6 xl:m-12 z-20"
          onClick={handleShowMenu}
        >
          <MdMenu size="3rem" />
        </button>
        {children}
        <div className="fixed top-0 right-0 m-4 lg:m-6 xl:m-12 z-20 hidden md:block">
          <Language />
        </div>
        <SocialMedia
          className="fixed bottom-0 left-0 m-4 lg:m-6 xl:m-12 hidden md:flex flex-col z-20"
          iconClassName="my-4"
        />
      </div>
      <SideMenu show={showMenu} onClose={handleShowMenu} />
    </div>
  );
}

export default Layouts;
