import { LeftSection } from './components/leftSection/leftSection.component';
import { RightSection } from './components/rightSection/rightSection.component';

import './App.scss';

const App = () => {

  return (
    <div className="App">
      <div id='drum-machine'>
      <LeftSection />
      <RightSection />
      </div>
    </div>
  );
};

export default App;
