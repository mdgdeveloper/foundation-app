import React from "react";
import CharacterMain from "../components/characterMain/CharacterMain";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="h-bg">
        <div className="h-nebula">
          <Header />
          <Main />
          <CharacterMain />
        </div>
      </div>
    </div>
  );
};

export default Home;
