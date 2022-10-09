import logo from './logo.svg';
import './App.css';
// import Aboutus from './Components/Aboutus';

import { useMediaQuery, useTheme } from "@mui/material";
// import Landing from './Pages/Landing';
import Routerpg from './Components/Routerpg';
// import Navbar from './Components/Navbar';

function App() {
    //theme instance
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
 <>

        
      <Routerpg matches={matches}/>
  

  



 </>
  );
}

export default App;
