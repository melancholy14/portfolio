import React, { useEffect, useState } from 'react';

import Container from 'app/layouts/Container';

import 'animate.css';

function Main() {
  const [animateClassName, setAnimateClassName] = useState<string>(
    'animate__bounceInRight'
  );

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
    <Container>
      <div className="relative text-4xl flex h-full pl-1/4">
        <div className={`m-auto animate__animated ${animateClassName}`}>
          <span className="font-bold text-6xl">Misol Goh</span>
          <br />
          <span className="font-semibold text-5xl">
            Front-end Engineer/Developer
          </span>
          <br />
          Travel/Coffee lover
        </div>
      </div>
    </Container>
  );
}

export default Main;
