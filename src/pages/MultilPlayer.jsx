import React, { useState } from 'react';
import { Users, Share2 } from 'lucide-react';
import gameBackgroundimg from '../assets/background_img-games.jpg';
import '../styles/Game.css';
import Layout from '../components/Layout';

const MultiPlayer = () => {
  const [activeSection, setActiveSection] = useState('gameInfo');

  return (
   <Layout>
     <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <div className="relative">
        <img src={gameBackgroundimg} alt="Clash of Code background" className="w-full h-48 object-cover background-img" />
        <div className="absolute inset-0 bg-gradient-to-r  to-purple-900/80"></div>
        <div className="absolute bottom-4 left-4">
          <h1 className="text-3xl font-bold mb-2">CLASH OF CODE</h1>
          <p className="flex items-center">
            <Users className="mr-2" size={18} />
            124,687 CodinGamers in the leaderboard
          </p>
        </div>
        <button className="absolute top-4 right-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded">
          JOIN A CLASH
        </button>
      </div>

      {/* Navigation */}
      <div className="flex border-b border-gray-700">
        <button 
          className={`px-4 py-2 font-medium ${activeSection === 'gameInfo' ? 'border-b-2 border-yellow-500' : 'text-gray-400'}`}
          onClick={() => setActiveSection('gameInfo')}
        >
          GAME INFO
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeSection === 'howToPlay' ? 'border-b-2 border-yellow-500' : 'text-gray-400'}`}
          onClick={() => setActiveSection('howToPlay')}
        >
          HOW TO PLAY
        </button>
        <button className="ml-auto px-4 py-2 flex items-center text-gray-400">
          <Share2 className="mr-2" size={18} /> SHARE
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex">
        <div className="w-2/3 pr-4">
          {activeSection === 'gameInfo' && (
            <>
              <h2 className="text-lg font-bold mb-2">WHAT'S THIS GAME?</h2>
              <p className="mb-4">
                Clash of Code is a game to improve your coding efficiency by solving short programming
                problems with other people, at the same time. Players share their solution at the end of a
                game to help other players improve their coding skills.
              </p>
              <h2 className="text-lg font-bold mb-2">WHAT'S THE PURPOSE?</h2>
              <ul className="list-none">
                <li className="flex items-center mb-1">
                  <span className="text-yellow-500 mr-2">★</span> Improve your problem-solving skills
                </li>
                <li className="flex items-center mb-1">
                  <span className="text-yellow-500 mr-2">★</span> Learn from other people's code
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">★</span> Practice coding interview questions
                </li>
              </ul>
            </>
          )}
          {activeSection === 'howToPlay' && (
            <>
              <h2 className="text-lg font-bold mb-2">HOW TO PLAY</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Join a clash by clicking the "JOIN A CLASH" button.</li>
                <li>Wait for other players to join (up to 8 players per clash).</li>
                <li>When the clash starts, read the problem statement carefully.</li>
                <li>Write your code solution in the provided editor.</li>
                <li>Submit your solution before the time runs out (usually 5-15 minutes).</li>
                <li>After the clash ends, review other players' solutions to learn new approaches.</li>
              </ol>
              <p className="mt-4">Remember, speed and accuracy are both important in Clash of Code!</p>
            </>
          )}
        </div>
        <div className="w-1/3 bg-gray-800 p-4 rounded">
          <h3 className="text-lg mb-2">Join a 5min coding battle! Starting in 00:27</h3>
          <div className="bg-gray-900 p-2 rounded">
            <h2 className="text-xl font-bold text-yellow-500 mb-2">CLASH OF CODE</h2>
            <div className="flex space-x-2">
              {['M', 'n', 'A', 't'].map((letter, index) => (
                <div key={index} className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded">
                  {letter}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
   </Layout>
  );
};

export default MultiPlayer;