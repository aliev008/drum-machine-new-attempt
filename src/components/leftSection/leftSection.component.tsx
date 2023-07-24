import { useState, useEffect, useContext, MouseEvent } from 'react';
import { AudioBankContext } from '../../context/audioBank.context';

import './leftSection.style.scss';

export const LeftSection = () => {
  const { audioBank, changeAudioBank, setCurrentSound } = useContext(AudioBankContext);
  const buttons = Object.keys(audioBank);

  function play(event: any, soundName: string) {
    const elem = event.target;
    const child = elem.querySelector("audio");
    setCurrentSound(soundName);
    child.currentTime = 0;
    child.play();
  }

  return (
    <div className='left-section'>
      {buttons.map((elem, index) => {
        const { src, name } = audioBank[elem as keyof typeof audioBank];
        return (<div key={index} className='drum-pad' onClick={(event) => play(event, name)}>{elem} <audio className='clip' id={elem} src={src}></audio></div>);
      })}
    </div>
  );
};