import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './component/MyButton';
import Alert from './component/Alert';

function App() {
  const [AlertVisible, setAlertVisible] = useState(false)
  return (
    <div className="App">
      {AlertVisible && <Alert onClose={()=> setAlertVisible(false)}>A simple primary alert—check it out!</Alert>}
      <MyButton onClick={()=>setAlertVisible(true)}>click my button </MyButton>
    </div>
  );
}

export default App;
