import React, { useState, useEffect } from 'react';

import Profile from 'app/pages/Profile';
import Projects from 'app/pages/Projects';

function App() {
  const [bgIndex, setBgIndex] = useState<number>(1);

  useEffect(() => {
    const scroll = function () {
      const rate =
        Math.round(((window.scrollY / window.innerHeight) * 100) / 13) + 1;

      setBgIndex((prev) => {
        return prev !== rate ? rate : prev;
      });
    };

    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <div className="overflow-auto">
      <div
        className={`transition duration-75 bg-teal-${
          (10 - bgIndex) * 100
        } text-gray-${bgIndex * 100}`}
      >
        <Profile />
        <Projects />
      </div>
    </div>
  );
}

export default App;
