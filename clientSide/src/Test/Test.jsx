import "./Test.css";
import money from "/src/assets/Money.png";
import addTransaction from "/src/assets/addmoney.png";
import dashboard from "/src/assets/dashboard.png";

const Test = () => {
  return (
    <div className="screen">
      <div className="sideBar">
        <img src={money} alt="Karchulu" />
        <div className="itemsContainer">
          <img src={dashboard} alt="dashboard" />
          <img src={addTransaction} alt="new transaction" />
        </div>
        <div className="profile-picture">
          <img
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            alt="Profile"
          />
        </div>
      </div>
      <div className="display-content">
        <p>This is the display content area where other elements will appear.</p>
      </div>
    </div>
  );
};

export default Test;
