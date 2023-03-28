import './styles/reset.css';
import './styles/App.css';
import Button from './components/ui/button/Button';

function App() {
  return (
    <div className='container'>
      <h1>New project</h1>
      <Button>Click me now!!!</Button>
      <button className='btn'>Subscirbe</button>
    </div>
  );
}
export default App;
