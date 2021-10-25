import React from "react";
import CharacterMain from "../components/characterMain/CharacterMain";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import "./home.css";
import ReadingGuide from "../components/readingGuide/ReadingGuide";

const Home = () => {
  return (
    <div>
      <div className="h-bg">
        <div className="h-nebula">
          <Header />
          <Main />
          <CharacterMain />
          <ReadingGuide />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
