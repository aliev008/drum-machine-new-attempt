import './App.css';
import { useState, useEffect, useContext} from 'react';
import { AudioBankContext } from './context/audioBank.context';

const App = () => {

  const {audioBank, changeAudioBank} = useContext(AudioBankContext);
  const buttons = Object.keys(audioBank);

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
            return (<div key={index} className='drum-pad' onClick={(event) => play(event)}>{elem} <audio className='clip' id={elem} src={audioBank[elem as keyof typeof audioBank].src}></audio></div>);
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
