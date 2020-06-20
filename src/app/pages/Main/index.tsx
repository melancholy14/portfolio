import React, { useEffect, useState } from 'react';

import Container from 'app/layouts/Container';
import { useScrollForBackground } from 'app/hooks/scroll';

import 'animate.css';
import { MdCardTravel } from 'react-icons/md';
import { DiCoffeescript } from 'react-icons/di';
import { FaBeer } from 'react-icons/fa';

function Main() {
  const [animateClassName, setAnimateClassName] = useState<string>(
    'animate__bounceInRight'
  );

  const { divRef } = useScrollForBackground('bg-blue-900');

  useEffect(() => {
    const timeoutFlip = setTimeout(() => {
      setAnimateClassName('animate__flip');
    }, 1250);

    const timeoutWobble = setTimeout(() => {
      setAnimateClassName('animate__wobble');
    }, 2500);

    return () => {
      clearTimeout(timeoutFlip);
      clearTimeout(timeoutWobble);
    };
  }, []);

  return (
    <Container className="h-screen">
      <div className="relative text-4xl flex h-full pl-1/4" ref={divRef}>
        <div className={`m-auto animate__animated ${animateClassName}`}>
          <span className="font-bold text-6xl">Misol Goh</span>
          <br />
          <span className="font-semibold text-5xl">
            Front-end Engineer/Developer
          </span>
          <br />
          <div className="flex items-center">
            {`loves  `}
            Travel <MdCardTravel />
            {` / `}
            Coffee <DiCoffeescript />
            {` / `}
            Beer <FaBeer />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Main;
