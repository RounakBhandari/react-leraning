import axios from 'axios'
import React from 'react'

const Homepage = () => {
  
  axios.get('https://api.escuelajs.co/api/v1/products')
  .then((val)=>{
    console.log(val.data)
  })
  .catch((err)=>{
    console.log(err)
  })




  return (
    <div>Homepage</div>
    
  )
}

export default Homepage