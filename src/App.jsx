import { useEffect, useState } from "react";
import "./App.scss";
import Main from "./components/Main";
import { useDispatch, useSelector } from "react-redux";
import { selectMenu } from "./features/menu/menuSlice";
import { selectLogin, setLogin } from "./features/login/loginSlice";
import Entrance from "./components/entrance/Entrance";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/entrance/login/login";
import Registerationfrom from "./components/entrance/Registerationfrom";
import ForgetPass from "./components/entrance/Forgetpassword";
import { account } from "./services/loginService";

function App() {
  const menu = useSelector(selectMenu);
  const login = useSelector(selectLogin);
  const dispatch = useDispatch();

  useEffect(() => {

    account().then(x => {
      dispatch(setLogin(true))
    })
    return () => {

    }
  }, [])


  if (login)
    return (
      // <div className={`App ${menu ? "collapsed" : ""}`}>
      //   <div className="main-container">
      <Main />
      //   </div>
      // </div>
    );
  else return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Entrance />}>
        <Route index element={<Login />} />
        <Route path='register' element={<Registerationfrom />} />
        <Route path='password' element={<ForgetPass />} />
      </Route>
    </Routes>

  </BrowserRouter>
}

export default App;
