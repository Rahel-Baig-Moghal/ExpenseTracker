import "./ExpenseTracker.css";
import TrackerForm from "../TrackerForm/TrackerForm";

const ExpenseTracker = (props) => {
  
  return (
    <div className="ExpenseTracker-contents">
      <TrackerForm title={props.title}/>
    </div>
  );
};

export default ExpenseTracker;
