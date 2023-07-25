import { useState, useContext } from 'react';
import { AudioBankContext } from '../../../context/audioBank.context';

import '../leftSection.style.scss';

type drumPadProps = {
  name: string;
  elem: string;
  src: string;
};

export const DrumPad = ({ name, elem, src }: drumPadProps) => {
  const { setCurrentSound } = useContext(AudioBankContext);

  // Create a state object to manage the clicked state for each button
  const [isCliked, setIsClicked] = useState<boolean>();

  function play(event: React.MouseEvent<HTMLDivElement>, soundName: string) {
    const elem = event.currentTarget as HTMLDivElement;
    const child = elem.querySelector("audio") as HTMLAudioElement;
    setCurrentSound(soundName);
    child.currentTime = 0;
    child.play();
  }

  function handleButtonClick(event: React.MouseEvent<HTMLDivElement>, soundName: string) {
    setIsClicked(true);

    // Call play function after updating the clicked state
    play(event, soundName);

    // Reset the clicked state after a short delay (100ms)
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  }

  return (<div className={isCliked ? 'drum-pad active' : 'drum-pad'} onClick={(event) => handleButtonClick(event, name)}>{elem} <audio className='clip' id={elem} src={src}></audio></div>);


};