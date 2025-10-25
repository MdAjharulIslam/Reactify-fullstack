
import React, { useEffect } from 'react'
import axios from 'axios'
const Component = () => {
const name = 'ajharul';
const age = 22;
const token = "wdfhwqh3543fkhfflkf"

const value = {
  name,
  age
}
  const fetchData = async ()=>{
    
    try {
      
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts",value,
       { headers:{
          "Authorization":`Bearer ${token}`
        }}
      )
     console.log("data", response.data)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div>
      data posted
    </div>
  )
}

export default Component
