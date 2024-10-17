import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProtectedInfo, OnLogout } from '../api/auth'
import Layout from '../components/Layout'
import { unauthenticateUser } from '../redux/slices/authSlices'
import  { ThreeDCardDemo } from '../components/Card'

import "../styles/Dashboard.css"
const Dashboard = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [protectedData, setProtectedData] = useState(null)

  
  const logout = async () => {
    try {
      await OnLogout()

      dispatch(unauthenticateUser())
      localStorage.removeItem('isAuth')
    } catch (error) {
      console.log(error.response)
    }
  }

  const protectedInfo = async () => {
    try {
      const { data } = await fetchProtectedInfo()

      setProtectedData(data.info)

      setLoading(false)
    } catch (error) {
      logout()
    }
  }

  useEffect(() => {
    protectedInfo()
  }, [])

  return loading ? (
    <Layout>
      <h1>Loading...</h1>
    </Layout>
  ) : (
    <Layout>
      
      <div className='flex justify-around'>
        <ThreeDCardDemo cardName={"SinglePlayer"} link={"/singleplayer/nameofgame"}/>
        <ThreeDCardDemo cardName={"MultiPlayer"} link={"/multiplayer/clashofCode"}/>
      </div>
      
        <h2>{protectedData}</h2>

        <button onClick={() => logout()} className=''>
          Logout
        </button>
      </Layout>
   
  )
}

export default Dashboard