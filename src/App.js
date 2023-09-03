import './App.css';
import Counter from './components/Counter';
import Atm from './pages/atm/Atm';
import {auth, provider} from './components/firebase'
import { signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import {createNewCollection, getCollectionData} from './components/firebase'
import { Route, Routes, Link } from 'react-router-dom';



function App() {


  const [user, setuser] = useState(null)
  const [category, setCategory] = useState([])

  async function handleAuth (){
    let newUser = await signInWithPopup(auth, provider).then((result) => {
    })
    .catch((error) => {
      console.log("Caught error Popup closed");
    });

    setuser(newUser)
  }

  useEffect(()=>{
    const getData = async() =>{
      const data =  await getCollectionData()
      console.log(data)
      setCategory(data)
    }
    getData()
  },[])
 

  return (
    <div className="App">
      <Link to="/atm">Atm</Link>
      <Routes>
        <Route path="/" element={<Atm />} />
        <Route path="/atm" element={<Atm />} />
      </Routes>

      <button onClick={handleAuth}>Sign in with google</button>
      {
        category.map((data)=>
        console.log(data.data())
        )
        // console.log(typeof(category))

      }
    </div>
  );
}

export default App;
