import React, { useEffect, useState } from 'react';

import Container from 'app/layouts/Container';
import { useScrollForBackground } from 'app/hooks/scroll';

import { MdCardTravel } from 'react-icons/md';
import { DiCoffeescript } from 'react-icons/di';
import { FaBeer } from 'react-icons/fa';

import 'animate.css';

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
    <Container className="h-screen m-auto">
      <div
        className="relative lg:text-4xl  text-2xl flex h-full md:pl-1/4"
        ref={divRef}
      >
        <div className={`m-auto animate__animated ${animateClassName}`}>
          <span className="font-sriracha font-bold lg:text-6xl text-5xl">
            Misol Goh
          </span>
          <br />
          <span className="font-sriracha font-semibold lg:text-5xl text-4xl">
            Front-end Engineer/Developer
          </span>
          <br />
          <span>loves</span>
          <div className="flex items-center">
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
