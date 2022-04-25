import './App.css';
import {BrowserRouter, Routes, Route, link, Link} from 'react-router-dom'
import PLayerList from './components';
import CreatePlayer from './components/create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to={'/'}>List     </Link>
      |
      <Link to={'/create'}>     Add Player</Link>
      <Routes>
        <Route path={'/'} element={<PLayerList/>}/>
        <Route path={'create'} element={<CreatePlayer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
