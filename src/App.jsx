/* eslint-disable react/react-in-jsx-scope */
import './styles/reset.css';
import './styles/App.css';
import CountDownSecion from './components/sections/countDown/CountDownSecion';
import EventSection from './components/sections/eventSection/EventSection';

function App() {
  return (
    <div className="App">
      <h1>
        h1
        <i className="fa fa-free-code-camp" aria-hidden="true" />
      </h1>
      <CountDownSecion until="2024-05-05" />
      <EventSection />
    </div>
  );
}
export default App;
