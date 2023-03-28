import './styles/reset.css';
import './styles/App.css';
import Button from './components/ui/button/Button';
import Card from './components/ui/card/Card';
import Grid from './components/ui/grid/Grid';

function App() {
  return (
    <div className='container'>
      <Card>
        <h1>Module css</h1>
      </Card>
      <Grid>
        <Button>Click me now!!!</Button>
        <Button lg>Large Btn!!!</Button>
        {/* sitas button gauna tik Button skirta css */}
        <button className='btn blue green'>Subscribe</button>
      </Grid>
    </div>
  );
}
export default App;
