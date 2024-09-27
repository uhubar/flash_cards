import React from "react";
import { Link, Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <nav>
        <div>
          <ul>
            <li>
              <Link to={"/"}>Main Page</Link>
            </li>
            <li>
              <Link to={"/theme/:id"}>Theme of quiz</Link>
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
