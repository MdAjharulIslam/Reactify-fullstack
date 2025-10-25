import React from 'react'

const Props = ({value}) => {

  const {name, age} = value
  return (
    <div>
      <p>my name is {name}</p>
      <p>my age is {age}</p>
    </div>
  )
}

export default Props


// how to use props value
<Props name = 'ajharul'  age = {22}/>