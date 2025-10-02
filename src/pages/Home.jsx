const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleRegisterClick} className="btn btn-primary m-2">
        Register
      </button>
      <button className="btn btn-success m-2">Login</button>
      <button className="btn btn-info m-2">Dashboard</button>
    </div>
  );
};

export default Home;
