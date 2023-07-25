import { useContext } from 'react';
import { AudioBankContext } from '../../context/audioBank.context';
import { DrumPad } from './DrumPad/drumPad.component';

import './leftSection.style.scss';

export const LeftSection = () => {
  const { audioBank } = useContext(AudioBankContext);
  const buttons = Object.keys(audioBank);

  return (
    <div className='left-section'>
      {buttons.map((elem, index) => {
        const { src, name } = audioBank[elem as keyof typeof audioBank];

        // return (<div key={index} className={clickedStates[name] ? 'drum-pad active' : 'drum-pad'} onClick={(event) => handleButtonClick(event, name)}>{elem} <audio className='clip' id={elem} src={src}></audio></div>);
        return <DrumPad name={name} elem={elem} src={src} />;
      })}
    </div>
  );
};