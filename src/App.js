import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'

import { Route, Routes, Link } from 'react-router-dom';



function App() {

  return (
    <div className="App">
        <Navbar />

        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/shop' element = {<Shop/>} />
        </Routes>

    </div>
  );
}

export default App;
