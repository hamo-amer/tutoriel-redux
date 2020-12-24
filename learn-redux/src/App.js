import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,sign} from './actions'
import './App.css';

function App() {
  const count = useSelector(state => state.CounterReducer)
  const isLogged=useSelector(state=>state.isLoggedReducer)
  const dispatch=useDispatch()
  return (
    <div className="App">
   <button onClick={()=>dispatch(increment(2))}>+</button>
   <h1>Counter:{count}</h1>
   <button onClick={()=>dispatch(decrement())}>-</button>
   <button onClick={()=>dispatch(sign())}>sign up</button>
   {
     isLogged ? <h3>valid user</h3>:null
   }
    </div>
  );
}

export default App;
