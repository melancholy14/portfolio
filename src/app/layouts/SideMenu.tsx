import React from 'react';

import { Modal } from 'app/components';
import SocialMedia from 'app/pages/Profile/SocialMedia';
import Language from './Language';

type SideMenuProps = {
  show: boolean;
  onClose: () => void;
};

function SideMenu({ show, onClose }: SideMenuProps) {
  return (
    <Modal show={show} onClose={onClose}>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col">
          {['skills-experience', 'project', 'about'].map((text) => (
            <a
              key={text}
              href={`#${text}`}
              className="uppercase text-4xl md:text-5xl xl:text-6xl m-4 md:m-8"
              onClick={onClose}
            >{`#${text.replace('-', ' & ')}`}</a>
          ))}
        </div>
        <div className="flex items-center justify-between md:justify-end">
          <SocialMedia
            className="flex items-center justify-start m-4 ml-2 md:hidden"
            iconClassName="mx-2"
          />
          <div className="block md:hidden">
            <Language color="black" />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SideMenu;
