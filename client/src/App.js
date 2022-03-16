

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Navbare from './Components/Navbar';
import Profile from './Components/Profile';
import PrivateRoute from './Components/privateRoute';
import SignUp from './Components/Signup/SignUp';

function App() {
  return (
    <div className="App">
     <Navbare></Navbare>
     <Routes>
       <Route path='/SignUp' element={ <SignUp> </SignUp>}></Route>
       <Route path='/Login' element={ <Login></Login>}></Route>
       <Route path='/profile'  element={
      <PrivateRoute><Profile></Profile></PrivateRoute>
    }   ></Route>
     </Routes>
    </div>
  );
}

export default App;
