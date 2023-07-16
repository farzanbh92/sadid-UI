import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import NoPage from './components/nopage/nopage';
import Entrance from './components/entrance/entrance';
import Login from './components/entrance/login/login';
import ForgetPass from './components/entrance/forgetpassword/forgetpassword';
import Registerationfrom from './components/entrance/registerationfrom/registerationfrom';
import Layout from './components/layout/layout';
import Counter from './components/counter/counter';
import Requests from './components/requests/requests';
import Cartable from './components/cartable/cartable';
import Groups from './components/groups/groups';
import Users from './components/users/users';
import Messages from './components/messages/messages';
import UserInformations from './components/userInformations/userInformations';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Entrance/>}>
    <Route index element={<Login/>}/>
    <Route path='register' element={<Registerationfrom/>}/>
    <Route path='password' element={<ForgetPass/>}/>
   </Route>
   <Route path='layout' element={<Layout/>}>
    <Route path='' element={<Counter/>}/>
    <Route path='counter' element={<Counter/>}/>
    <Route path='requests' element={<Requests/>}/>
    <Route path='cartable' element={<Cartable/>}/>
    <Route path='groups' element={<Groups/>}/>
    <Route path='users' element={<Users/>}/>
    <Route path='messages' element={<Messages/>}/>
    <Route path='userInformations' element={<UserInformations/>}/>
   </Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
