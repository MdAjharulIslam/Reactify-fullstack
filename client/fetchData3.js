
import React, { useEffect } from 'react'

const fetchDataComponent = () => {

  const name = 'ajharul';
  const age = 22

  const fetchData = async ()=>{
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({name, age})
      })
      const data = await response.json()
      console.log(data)

    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(()=>{
    fetchData();
  },[])
  
  return (
    <div>
      see in console
    </div>
  )
}

export default fetchDataComponent
