import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./action/index";
function App() {
const myState = useSelector((state)=> state.toChange);
const dispatch = useDispatch();

  return (
    <div className="App">
     <h1>increament and decrement</h1>

<div className='container' >
<input type="text" className='inp' value = {myState} />
<button onClick={()=> dispatch(decNumber())} className='a'>-</button>
<button onClick={()=> dispatch(incNumber())} className='a'>+</button>
</div>
    </div>
  );
}

export default App;
