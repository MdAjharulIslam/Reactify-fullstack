import React from 'react'

const Map = () => {

    const users = ['Ajharul', 'jone doe', 'majharul', 'kamrul']
  return (
    <div>
      <ul>
        {
            users.map((user, index)=>{
               return <li key={index}>{user}</li>
            })
        }
      </ul>
    </div>
  )
}

export default Map
