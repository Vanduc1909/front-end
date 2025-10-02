const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <button
        className="btn btn-primary me-2"
        onClick={() => (window.location.href = "/register")}
      >
        Register
      </button>
      <button
        className="btn btn-success me-2"
        onClick={() => (window.location.href = "/login")}
      >
        Login
      </button>
      <button
        className="btn btn-info"
        onClick={() => (window.location.href = "/dashboard")}
      >
        Dashboard
      </button>
    </div>
  );
};

export default Home;
