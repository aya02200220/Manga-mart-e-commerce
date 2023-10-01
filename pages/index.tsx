import Login from "./login";
import Home from "./home";

const MainRoot = () => {
  return (
    <div>
      <div id="home">
        <Login />
      </div>
      <div id="about">
        <Home />
      </div>
    </div>
  );
};

export default MainRoot;
