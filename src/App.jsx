import './styles/reset.css';
import './styles/App.css';
import CountDownSecion from './components/sections/countDown/CountDownSecion';

function App() {
  return (
    <div className='App'>
      <CountDownSecion until={'2024-05-05'} />
    </div>
  );
}
export default App;
