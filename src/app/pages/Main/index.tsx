import React, { useEffect, useState } from 'react';

import Container from 'app/layouts/Container';
import { useScrollForBackground } from 'app/hooks/scroll';

import { MdCardTravel } from 'react-icons/md';
import { DiCoffeescript } from 'react-icons/di';
import { FaBeer } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { FiArrowDown } from 'react-icons/fi';

import 'animate.css';

const favourites = [
  {
    text: 'Coffee',
    Icon: DiCoffeescript,
  },
  {
    text: 'Beer',
    Icon: FaBeer,
  },
  {
    text: 'Travel',
    Icon: MdCardTravel,
  },
  {
    text: 'Solving Problems',
    Icon: MdComputer,
  },
];

function Main() {
  const [flipIndex, setFlipIndex] = useState<number>(-2);

  const { divRef } = useScrollForBackground('bg-blue-900');

  useEffect(() => {
    const intervalFlip = setInterval(() => {
      setFlipIndex((prev) => {
        if (prev === favourites.length - 1) {
          clearInterval(intervalFlip);
          return prev;
        }

        return prev + 1;
      });
    }, 1500);

    return () => {
      clearInterval(intervalFlip);
    };
  }, []);

  const isLast = (index: number) => index === favourites.length - 1;

  return (
    <Container className="h-screen m-auto">
      <div
        className="relative font-sriracha lg:text-4xl  text-2xl flex h-full md:pl-1/4"
        ref={divRef}
      >
        <div className="m-auto animate__animated animate__bounceInRight">
          <span className="font-bold lg:text-6xl text-5xl">Misol Goh</span>
          <br />
          <span className="text-yellow-500 font-semibold lg:text-5xl text-4xl">
            Software Developer
          </span>
          <br />
          <span>loves</span>
          {favourites.map(({ text, Icon }, index) => (
            <div
              key={text}
              className={`flex items-center ${
                index === flipIndex
                  ? 'block animate__animated animate__flipInX'
                  : 'hidden'
              } ${isLast(index) ? 'text-red-300' : ''}`}
            >
              <span className="mr-3">{text}</span>
              <Icon />
            </div>
          ))}
          {isLast(flipIndex) && (
            <div className="text-2xl flex items-center py-4 animate__animated animate__zoomIn">
              <span className="mr-3">Wanna know more?</span>
              <span className="mr-3 font-extrabold">Scroll down</span>
              <FiArrowDown />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Main;
