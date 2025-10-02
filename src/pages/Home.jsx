const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button
        className="btn btn-primary m-2"
        onClick={() => (window.location.href = "/register")}
      >
        Register
      </button>
      <button
        className="btn btn-success m-2"
        onClick={() => (window.location.href = "/login")}
      >
        Login
      </button>
      <button
        className="btn btn-info m-2"
        onClick={() => (window.location.href = "/dashboard")}
      >
        Dashboard
      </button>
    </div>
  );
};

export default Home;
