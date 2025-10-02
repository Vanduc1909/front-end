const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <a href="/register" type="button" className="btn btn-primary m-2">
        Register
      </a>
      <a href="/login" type="button" className="btn btn-secondary m-2">
        Login
      </a>
      <a href="/dashboard" type="button" className="btn btn-info m-2">
        Dashboard
      </a>
    </div>
  );
};

export default Home;
