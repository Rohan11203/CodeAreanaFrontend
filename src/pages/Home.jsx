import React from "react";
import Layout from "../components/Layout";
import "../styles/Home.css";
import { LandingPage } from "../components/LandingPage";
const Home = () => {
  return (
    <Layout>
      <div className="home-hero">
        <LandingPage />
      </div>
      
    </Layout>
  );
};

export default Home;
