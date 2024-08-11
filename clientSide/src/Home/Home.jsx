import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Navbar from "../Naavbar/Navbar";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import ExpenseTracker from "../ExpenseTracker/ExpenseTracker"
import Cookies from 'js-cookie';


const Home = () => {
  const [userData, setUserData] = useState(null);
  const [showEle, setEle] = useState("Dashboard")
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  console.log(showEle);
  

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3001/user/logout", {
        username: userData?.username,
      });
  
      Cookies.remove('username');  
      Cookies.remove('accesstoken', { path: '/' });  
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  if (showEle==="Logout"){
    handleLogout()
  }




  return (
    <div>
      <Navbar onLogout={handleLogout} setEle={setEle} />
      {showEle === "Dashboard" && <Dashboard userData={userData} setUserData={setUserData} />}
      {showEle === "Track expense" && <ExpenseTracker />}
    </div>
  );
};

export default Home;
