import Login from "./login";
import Home from "./home";
import Header from "./header";

const MainRoot = () => {
  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <div id="about">
        <Home />
      </div>
    </div>
  );
};

export default MainRoot;
