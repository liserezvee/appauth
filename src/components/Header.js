import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext, { AuthContext } from "../contexts/UserContext";

const Header = (props) => {
  const {user, logOut} = useContext(AuthContext)
  console.log(user);

  const handleSignOut = ()=>{
    logOut()
    .then(()=>{

    })
    .catch((error)=>{
      console.error(error)
    })
  }

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">AuthApp</button>
        <Link className="btn btn-ghost text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost text-xl" to="/orders">
          Orders
        </Link>
        <Link className="btn btn-ghost text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost text-xl" to="/register">
          Register
        </Link>
        {user?.email && <span>welcome, {user.email}</span>}
        {user?.email? <button onClick={handleSignOut} className="btn btn-sm">Sign Out</button>: <Link to='/login'>
          <button className="btn btn-sm">Login</button>
          </Link>}
      </div>
    </div>
  );
};

export default Header;
