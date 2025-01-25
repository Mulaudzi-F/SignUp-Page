import ReusableModal from "../UI/ReUseAbleModal";

export const RequestSessionForm = () => {
  return (
    <div>
      <h1>Request a session</h1>
      <form>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" required></input>
        <label htmlFor="time">Time</label>
        <input type="time" id="time" name="time" required></input>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit"> Send Request</button>
      </form>
    </div>
  );
};
