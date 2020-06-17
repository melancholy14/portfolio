import React, { useState } from 'react';

import Layouts from 'app/layouts';

import Main from 'app/pages/Main';
import Profile from 'app/pages/Profile';
import Projects from 'app/pages/Projects';
import Experiences from 'app/pages/Experiences';

function App() {
  const [bgIndex, setBgIndex] = useState<number>(1);

  // useEffect(() => {
  //   const scroll = function () {
  //     const rate =
  //       Math.round(((window.scrollY / window.innerHeight) * 100) / 13) + 1;

  //     setBgIndex((prev) => {
  //       return prev !== rate ? rate : prev;
  //     });
  //   };

  //   window.addEventListener('scroll', scroll);

  //   return () => {
  //     window.removeEventListener('scroll', scroll);
  //   };
  // }, []);

  return (
    <div className="overflow-auto">
      <Layouts
        className={`transition duration-75 bg-teal-900 text-gray-${bgIndex * 100}`}
      >
        <Main />
        <Experiences />
        <Projects />
        <Profile />
      </Layouts>
    </div>
  );
}

export default App;
