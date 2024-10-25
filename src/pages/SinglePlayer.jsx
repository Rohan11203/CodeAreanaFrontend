import React from 'react'
import { GameCards } from '../components/Card'
import { Card } from '../components/vneetCard'
export const SinglePlayer = () => {
  return (
    <div className='bg-black h-900px'>
      <h1 className= 'font-bold text-4xl text-white'>Single Player mode</h1>
      {/* <GameCards cardName={"React Interview Quiz"} link={"/singleplayer/react-quiz"} />
      <GameCards cardName={"Java Quiz"} link={"/singleplayer/quiz"} />
      <GameCards cardName={"Birayani Quiz"} link={"/singleplayer/quiz"} /> */}

      <div className='d-flex'>
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      
    </div>
    
  )
}
