import React, { useState } from 'react';
import Container from 'app/layouts/Container';

type Position = {
  x?: number | string;
  y?: number | string;
};

function Main() {
  const [position, setPosition] = useState<Position>({ x: '33%', y: '33%' });

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { screenX, screenY } = event;

    setPosition({
      x: screenX,
      y: screenY,
    });
  };

  console.log('position', position);

  return (
    <Container>
      <div className="text-4xl" onMouseMove={onMouseMove}>
        <div className="absolute" style={{ top: position.y, left: position.x }}>
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
