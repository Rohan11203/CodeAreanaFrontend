
import { HardHatIcon, HomeIcon } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function WorkInProgressError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="text-center space-y-6 max-w-md">
        <HardHatIcon className="mx-auto h-24 w-24 text-yellow-500" aria-hidden="true" />
        
        <h1 className="text-4xl font-bold tracking-tight">Work in Progress</h1>
        
        <p className="text-xl text-gray-400">
          We're working hard to bring you something amazing. Please check back later!
        </p>
        
        <div className="pt-6">
          
           
            <NavLink to="/">
            Back To home
            </NavLink>
          
        </div>
        
        <p className="text-sm text-gray-500 pt-8">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </div>
  )
}