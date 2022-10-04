import logo from './logo.svg';
import './App.css';
import Aboutus from './Components/Aboutus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';

function App() {
  return (
 <>
 <Router>
  <Routes>
    <Route path='/'>
       <Route index element={<Landing/>}></Route>
      <Route path='/aboutus' element={<Aboutus/>}></Route>
    </Route>
  </Routes>


 </Router>


 </>
  );
}

export default App;
