import './App.css';
import { useState, useEffect } from 'react';
import sounds from './sounds.json';

const App = () => {

  const [audioButtons, setAudioButtons] = useState([]);

  // Fetching audio buttons from assets

  // useEffect(() => {
  //   const fetchSounds = async () => {
  //     try {
  //       const response = await fetch("sounds.json");
  //       const data = await response.json();
  //       console.log({ data });
  //       setAudioButtons(data);

  //     } catch (err) {
  //       console.log(err);
  //     }

  //   };

  //   fetchSounds();
  // }, []);
  
  const buttons = Object.keys(sounds);

  function play(event: any) {
    const elem = event.target;
    const child = elem.querySelector("audio");
    child.play();
  }
  return (
    <div className="App">
      <div id='drum-machine'>
        <div className='left'>
          {buttons.map((elem, index) => {
            return (<div key={index} className='drum-pad' onClick={(event) => play(event)}>{elem} <audio src={sounds[elem as keyof typeof sounds].src}></audio></div>);
          })}
        </div>
        <div className='right'>
          <div id='display'></div>
        </div>
      </div>
    </div>
  );
};

export default App;
