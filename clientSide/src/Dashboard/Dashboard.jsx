import { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";

const Dashboard = ({userData, setUserData}) => {
  const [error, setError] = useState(null);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/data")
      .then((result) => {
        setUserData(result.data);
      })
      .catch((err) => {
        console.error(err);
        setError("An error occurred while fetching user data.");
      });
  }, []);
  
  return (
      <div className="display-contents">
        {userData ? (
          <h1>Welcome home {userData.username}</h1>
        ) : (
          <h1>{error || "Loading..."}</h1>
        )}
      </div>
  );
};

export default Dashboard;
