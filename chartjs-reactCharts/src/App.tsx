import './App.css'
import BarGraph from './components/BarGraph';
import LineGraph from './components/LineGraph';
import PieGraph from './components/PieGraph';

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold'>Let's ^Chart with react 🙂</h1>
      <LineGraph />
      <BarGraph/>
      <PieGraph/>
    </>
  )
}

export default App
