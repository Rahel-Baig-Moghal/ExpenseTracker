import "./TrackerForm.css";

const TrackerForm = (props) => {
  return (
    <div className="tracker-card">
      <span className="tracker-title">{props.title}</span>
      <form className="tracker-form">
        <div className="tracker-group">
          <input placeholder="‎" type="text" required />
          <label>Name</label>
        </div>
        <div className="tracker-group">
          <input
            placeholder="‎"
            type="email"
            id="email"
            name="email"
            required
          />
          <label>Email</label>
        </div>
        <div className="tracker-group">
          <select id="dropdown" name="dropdown" required>
            <option value="" disabled selected>
              Select category
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <label htmlFor="dropdown">Categories</label>
        </div>
        <div className="tracker-group">
          <textarea
            placeholder="‎"
            id="comment"
            name="comment"
            rows="5"
            required
          ></textarea>
          <label>Desicription</label>
        </div>
        <button type="submit">{props.title}</button>
      </form>
    </div>
  );
};

export default TrackerForm;
