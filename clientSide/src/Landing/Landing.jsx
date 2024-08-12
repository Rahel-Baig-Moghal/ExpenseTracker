import "./Landing.css";
import { useNavigate } from "react-router-dom";
import money from "/src/assets/Money.png";
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="Landing-contents">
      <div className="logo-container">
        <img src={money} alt="Karchulu Logo" />
      </div>
      <div className="welcome-container">
        <h1>Welcome to Karchulu</h1>
        <p>Your ultimate expense tracking solution</p>
        <div className="btn-container">
          <button
            className="btn register-btn"
            onClick={() => navigate("/signin")}
          >
            Register
          </button>
          <button
            className="btn login-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
