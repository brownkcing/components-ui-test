import './App.css';
import './styles/App.scss'
import Button from './components/button';
import Navbar from  './components/navbar';
import Avatar from './components/avatar';
import Box1 from './components/box1';
import Box2 from './components/box2';
import Counter from './components/counter';
import Table from './components/table';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='wrapper'>
        <Button />
        <Avatar />
        <Box1 />
        <Box2 />
        <Counter />
        <Table />
      </div>
    </div>
  );
}

export default App;
