import "./IncomeTracker.css";
import TrackerForm from "../TrackerForm/TrackerForm";

const IncomeTracker = (props) => {
  
  return (
    <div className="IncomeTracker-contents">
      <TrackerForm title={props.title}/>
    </div>
  );
};

export default IncomeTracker;
