import './styles/reset.css';
import './styles/App.css';
import Button from './components/ui/button/Button';

function App() {
  return (
    <div className='container'>
      <h1>New project</h1>
      <Button>Click me now!!!</Button>
      {/* sitas button gauna tik Button skirta css */}
      <button className='btn'>Subscirbe</button>
    </div>
  );
}
export default App;
