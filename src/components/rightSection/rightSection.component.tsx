import { useState, useEffect, useContext } from 'react';
import { AudioBankContext } from '../../context/audioBank.context';

import './rightSection.style.scss';

export const RightSection = () => {
  const { audioBank, changeAudioBank } = useContext(AudioBankContext);
  const buttons = Object.keys(audioBank);

  return (
    <div className='right-section'>
      <div id='display'>
        <h3>Sound Name</h3>
      </div>
    </div>
  );
};