import { useState, useEffect, useContext } from 'react';
import { AudioBankContext } from '../../context/audioBank.context';

import './leftSection.style.scss';

export const LeftSection = () => {
  const { audioBank, changeAudioBank } = useContext(AudioBankContext);
  const buttons = Object.keys(audioBank);

  function play(event: any) {
    const elem = event.target;
    const child = elem.querySelector("audio");
    child.play();
  }

  return (
    <div className='left-section'>
      {buttons.map((elem, index) => {
        return (<div key={index} className='drum-pad' onClick={(event) => play(event)}>{elem} <audio className='clip' id={elem} src={audioBank[elem as keyof typeof audioBank].src}></audio></div>);
      })}
    </div>
  );
};