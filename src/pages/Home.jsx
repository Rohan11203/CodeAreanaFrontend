import React from "react";
import Layout from "../components/Layout";
import "../styles/Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="hero-section">
        <h1>Welcome to CodeArena</h1>
        <p>Sharpen your coding skills through epic games and dominate the leaderboard.</p>
        <div className="hero-buttons">
          <button className="btn btn-start">Start Playing</button>
          <button className="btn btn-leaderboard">View Leaderboard</button>
        </div>
      </div>

      <div className="featured-games">
        <h2>Featured Games</h2>
        <div className="games-list">
          <div className="game-card">
            <h3>Code Racer</h3>
            <hr></hr>
            <p>Test your skills in this exciting coding challenge!</p>
            <button className="btn btn-play">Play Now</button>
          </div>
          <div className="game-card">
            <h3>Bug Squash</h3>
            <hr></hr>
            <p>Test your skills in this exciting coding challenge!</p>
            <button className="btn btn-play">Play Now</button>
          </div>
          <div className="game-card">
            <h3>Algorithm Arena</h3>
            <hr></hr>
            <p>Test your skills in this exciting coding challenge!</p>
            <button className="btn btn-play">Play Now</button>
          </div>
        </div>
      </div>

      <div className="leaderboard-section">
        <h2>Leaderboard</h2>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>🏆 1</td>
              <td>CodeMaster</td>
              <td>1500</td>
            </tr>
            <tr>
              <td>2</td>
              <td>ByteNinja</td>
              <td>1450</td>
            </tr>
            <tr>
              <td>3</td>
              <td>AlgoWhiz</td>
              <td>1400</td>
            </tr>
            <tr>
              <td>4</td>
              <td>SyntaxSage</td>
              <td>1350</td>
            </tr>
            <tr>
              <td>5</td>
              <td>LogicLegend</td>
              <td>1300</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-full-leaderboard">View Full Leaderboard</button>
      </div>
    </Layout>
  );
};

export default Home;
