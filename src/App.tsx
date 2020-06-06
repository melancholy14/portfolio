import React from 'react';

import Profile from 'app/pages/Profile';
import Projects from 'app/pages/Projects';

function App() {
  return (
    <div className="overflow-auto">
      <div className="bg-teal-900 text-white">
        <Profile />
      </div>
      <div className="bg-teal-100 text-gray-900">
        <Projects />
      </div>
    </div>
  );
}

export default App;
