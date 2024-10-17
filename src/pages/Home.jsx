import React from "react";
import Layout from "../components/Layout";
import "../styles/Home.css";
import { BackgroundBoxesDemo } from "../components/BackgroundBoxes";
const Home = () => {
  return (
    <Layout>
      <div className="home-hero">
        <BackgroundBoxesDemo />
      </div>
      
    </Layout>
  );
};

export default Home;
