import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import caretRightSVG from "../assets/img/caret-right.svg"
import speakersSVG from "../assets/img/speakers.svg"
import logoPNG from "../assets/img/Logo 1.png"
import allMeetingsSVG from "../assets/img/all-meetings.svg"

export default function Navigation() {
  let location = useLocation();
  

  return (
    <aside className={"side-nav"}>
      <img
        className={"logo"}
        src={logoPNG}
      />
      <ul className={"menu-wrapper"}>
        <li>
          <Link
            to="/"
            className={`${"menu-item"} ${[
              location.pathname === "/" ? "active" : "",
            ]}`}
          >
            <img src={allMeetingsSVG} />
            <span>My Chat</span>
            <img src={caretRightSVG} />
          </Link>
        </li>
        {/* <li className=''>
                    <Link to='/Reports' className='menu-item'>
                        <img src={require('../assets/img/reports.svg').default} />
                        <span>Report</span>
                        <img src={require('../assets/img/caret-right.svg').default} />
                    </Link>
                </li> */}
        {/* <li className="">
          <Link
            to="/Speakers"
            className={`${"menu-item"} ${[
              location.pathname === "/Speakers" ? "active" : "",
            ]}`}
          >
            <img src={speakersSVG} />
            <span>Speakers</span>
            <img src={caretRightSVG} />
          </Link>
        </li> */}
      </ul>
    </aside>
  );
}
