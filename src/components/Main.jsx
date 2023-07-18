import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { logout } from "../api";
import { setLogin } from "../features/login/loginSlice";
import Layout from "./Layout";
import Requests from "./Requests";

export default function Main() {
  

  return (

    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Layout />}>
          <Route path='requests' element={<Requests />} />
          {/* <Route path='cartable' element={<Cartable />} />
          <Route path='groups' element={<Groups />} />
          <Route path='users' element={<Users />} />
          <Route path='messages' element={<Messages />} />
          <Route path='userInformations' element={<UserInformations />} /> */}
          <Route path="*" element={PageNotFound} />
        </Route>
      </Routes>

    </BrowserRouter>

  );
}
function PageNotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <h2 className="mt-5">404 Page not found</h2>
    </div>
  );
}
