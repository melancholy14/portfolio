import React from 'react';

import { Modal } from 'app/components';

type SideMenuProps = {
  show: boolean;
  onClose: () => void;
};

function SideMenu({ show, onClose }: SideMenuProps) {
  return (
    <Modal show={show} onClose={onClose}>
      <div className="flex flex-col">
        {['skills-experience', 'project', 'about'].map((text) => (
          <a
            key={text}
            href={`#${text}`}
            className="uppercase text-6xl m-8"
            onClick={onClose}
          >{`#${text}`}</a>
        ))}
      </div>
    </Modal>
  );
}

export default SideMenu;
