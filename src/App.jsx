/* eslint-disable react/react-in-jsx-scope */
import './styles/reset.css';
import './styles/App.css';
import CountDownSecion from './components/sections/countDown/CountDownSecion';
import EventSection from './components/sections/eventSection/EventSection';
import ConferenceSection from './components/sections/conference/ConferenceSection';

function App() {
  return (
    <div className="App">
      {false && <CountDownSecion until="2024-05-05" />}
      {false && <EventSection />}
      <ConferenceSection />
    </div>
  );
}
export default App;
