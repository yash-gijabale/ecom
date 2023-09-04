import './App.css';
import CheckOut from './components/check-out/check-out';
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
          <Route path='/shop/*' element = {<Shop/>} />
          <Route path='/checkout' element = {<CheckOut/>} />
        </Routes>

    </div>
  );
}

export default App;
