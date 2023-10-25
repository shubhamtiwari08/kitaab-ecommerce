 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routings from './Routes/Routings';
import { useEffect } from 'react';


function App() {

 
  return (
    <div className="App">
      <ToastContainer/>
      <Routings/>
    </div>
  );
}

export default App;
