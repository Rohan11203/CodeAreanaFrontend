import React from "react";
import Layout from "../components/Layout";
import "../styles/Home.css";
import { NavLink } from "react-router-dom";
import homeImage from "../assets/coderacer.jpeg";
import { BackgroundBoxesDemo } from "../components/BackgroundBoxes";
const Home = () => {
  return (
    <Layout>
      <BackgroundBoxesDemo />

      
     
    </Layout>
  );
};

export default Home;
