import React, { useContext } from "react"
import { AuthContext } from "../contexts/UserContext";

const Home = (props) => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <h3>This is Home {user?.email}</h3>
    </div>
  )
};

export default Home;
