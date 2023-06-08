import React, { useState } from 'react'

const Profile = (props) => {
    const [count,setCount]=useState(0);
  return (
   
    <div>
       <h1>Profile Component</h1>
       <h3>Name: {props.name}</h3>
       <h2>Count : {count}</h2>
       <button onClick={()=>setCount(1)}>Count</button>
    </div>
  )
}

export default Profile
