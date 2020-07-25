import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { MdMenu } from 'react-icons/md';

import { selectApp } from 'app/store/selectors';

import SocialMedia from 'app/pages/Profile/SocialMedia';

import SideMenu from './SideMenu';
// import i18n from 'app/i18n';

type LayoutsProps = {
  className?: string;
  children: React.ReactNode;
};

function Layouts({ className, children }: LayoutsProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const { bgClassName } = useSelector(selectApp);

  const handleShowMenu = () => setShowMenu(!showMenu);

  const { i18n } = useTranslation();

  const onChangeLanguage = (language: string) => () => {
    i18n.changeLanguage(language);
  };

  return (
    <div
      className={`transition duration-500 text-white font-mono
      ${bgClassName || ''}
      ${className || ''}`}
    >
      <div className="container">
        <button
          type="button"
          className="fixed top-0 m-4 md:m-6 lg:m-12 z-20"
          onClick={handleShowMenu}
        >
          <MdMenu size="3rem" />
        </button>
        {children}
        <div className="fixed top-0 right-0 m-4 md:m-6 lg:m-12 z-20">
          <button
            type="button"
            className="border border-white rounded-tl-xl rounded-bl-xl p-2"
            onClick={onChangeLanguage('ko')}
          >
            KO
          </button>
          <button
            type="button"
            className="border border-white rounded-tr-xl rounded-br-xl p-2"
            onClick={onChangeLanguage('en')}
          >
            EN
          </button>
        </div>
        <SocialMedia
          className="fixed bottom-0 m-4 md:m-6 lg:m-12 hidden md:flex flex-col z-20"
          iconClassName="my-4"
        />
      </div>
      <SideMenu show={showMenu} onClose={handleShowMenu} />
    </div>
  );
}

export default Layouts;
