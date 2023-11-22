import React from 'react';
import './App.css';
import Intro from './components/intro';
import Skills from './components/skills';
import Projects from './components/projects';
import GuideBar from'./components/guidebar';
import Buttons from './components/buttons';
import background from './static/background.svg';

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: '10%',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed', 
    height: '100vh',
    overflowY: 'auto', 
  };

  return (
    <div style={backgroundImageStyle}>
      {/* fixed content goes here */}
      <div>
        <Intro />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
export default App;