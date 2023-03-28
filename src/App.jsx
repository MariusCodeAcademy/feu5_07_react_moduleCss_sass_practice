import './styles/reset.css';
import './styles/App.css';
import Button from './components/ui/button/Button';

function App() {
  return (
    <div className='container'>
      <h1>New project</h1>
      <Button>Click me now!!!</Button>
      <Button lg>Large Btn!!!</Button>
      {/* sitas button gauna tik Button skirta css */}
      <button className='btn blue green'>Subscribe</button>
    </div>
  );
}
export default App;
