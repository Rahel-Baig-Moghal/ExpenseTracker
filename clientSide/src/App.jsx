import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import Login from "./Login/Login";
import Home from "./Home/Home";
import AccessDenied from "./AccessDenied/AccessDenied";
import Dashboard from "./Dashboard/Dashboard";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login  />}
          ></Route>
          <Route path="/Signin" element={<SignIn />}></Route>
          <Route
            path="/Login"
            element={<Login/>}
          ></Route>
          <Route
            path="/Home"
            element={<Home />}
          ></Route>
          {/* <Route
            path="/DashBoard"
            element={<Dashboard />}
          ></Route>
          <Route
            path="/ExpenseTracker"
            element={<ExpenseTracker />}
          ></Route> */}
          <Route path="/Accessdenied" element={<AccessDenied />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
