import './styles/reset.css';
import './styles/App.css';
import CountDownSecion from './components/sections/countDown/CountDownSecion';
import EventSection from './components/sections/eventSection/EventSection';

function App() {
  return (
    <div className='App'>
      <CountDownSecion until={'2024-05-05'} />
      <EventSection />
    </div>
  );
}
export default App;
