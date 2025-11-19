import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MainImage() {
    const navigate = useNavigate()
    const handleDiscover =()=>{

        navigate('/Discovery')
    }

    
  return (
    <div>
       <h1>Welcome to Sudarshan Secority Service</h1> 
       <p>Lets give them a elite Service</p>
       <button onClick={handleDiscover}>Discover More</button>
       <img src="/Image/1.png" alt="img" />
    </div>
  )
}
