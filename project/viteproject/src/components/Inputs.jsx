
const Inputs = () => {

  return (
    <>
      <div className="form-container">
        <h2>User Input Form</h2>
        <form>
          <input type="text" placeholder="Enter your name" required />

          <input type="email" placeholder="Enter your email" required />

          <input type="password" placeholder="Enter your password" required />

          <input type="number" placeholder="Enter your age" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Inputs;
