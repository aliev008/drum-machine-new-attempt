import { LeftSection } from './components/leftSection/leftSection.component';

import './App.css';

const App = () => {

  return (
    <div className="App">
      <div id='drum-machine'>
      <LeftSection />
        <div className='right-section'>
          <div id='display'>
            <h3>Sound Name</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
