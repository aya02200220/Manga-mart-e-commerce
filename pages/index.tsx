import Home from "./home";
import Header from "../components/Header/Header";

const MainRoot = () => {
  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <div id="home">
        <Home />
      </div>
    </div>
  );
};

export default MainRoot;
