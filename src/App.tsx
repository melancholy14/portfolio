import React from 'react';

import Layouts from 'app/layouts';
import Main from 'app/pages/Main';
import Profile from 'app/pages/Profile';
import Projects from 'app/pages/Projects';
import Experiences from 'app/pages/Experiences';

import 'pattern.css/dist/pattern.css';

function App() {
  return (
    <div className="overflow-auto">
      <Layouts>
        <Main />
        <Experiences />
        <Projects />
        <Profile />
      </Layouts>
    </div>
  );
}

export default App;
