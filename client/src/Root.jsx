import React from "react";
import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <nav>
        <div>
          <ul style={{display: 'flex', gap: '220px', paddingBottom: '25vh'}}>
            <li>
              <Link to={"/"}>Main Page</Link>
            </li>
            <li>
              <Link to={"/themes"}>Theme of quiz</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/reg"}>Registration</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Root;
