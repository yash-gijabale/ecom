import './App.css';
import Counter from './components/Counter';
import Atm from './pages/atm/Atm';
import {auth, provider} from './components/firebase'
import { signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import {createNewCollection, getCollectionData} from './components/firebase'
import {SHOP_DATA} from './shop_data'
import { wait } from '@testing-library/user-event/dist/utils';



function App() {


  const [user, setuser] = useState(null)
  const [pdata, setdata] = useState([])
  async function handleAuth (){
    let newUser = await signInWithPopup(auth, provider)
    setuser(newUser)
  }

  useEffect(()=>{
    const getData = async() =>{
      const data =  await getCollectionData()
      setdata(data)
    }
    setdata('loading...')
    getData()
  },[])
 

  return (
    <div className="App">
      <Atm/>
      {
        // pdata.items.forEach(element => {
          
        // })
        console.log(typeof(pdata.items))
      }
      <button onClick={handleAuth}>Sign in with google</button>
      <button onClick={handleAuth}>Log in</button>
      {/* <span>{data}</span> */}
    </div>
  );
}

export default App;
