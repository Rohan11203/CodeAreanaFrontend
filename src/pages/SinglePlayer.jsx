import React from 'react'
import { GameCards } from '../components/Card'

export const SinglePlayer = () => {
  return (
    <div className='d-flex'>
      <h1>Single Player mode</h1>
      <GameCards cardName={"React Interview Quiz"} link={"/singleplayer/react-quiz"} />
      <GameCards cardName={"Java Quiz"} link={"/singleplayer/quiz"} />
      <GameCards cardName={"Birayani Quiz"} link={"/singleplayer/quiz"} />
      
    </div>
    
  )
}
