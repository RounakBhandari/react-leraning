import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Homepage = () => {

const [data, setData] = useState([]);
  const getData = async () => {
    try {
     const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
     setData(response.data) 
    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    getData();
    }
  , []);
  


  return (
    <div>
      <div className="p-5">
        {data.map((post, i)=>{
          return <div>hello</div>
})}
      </div>
    </div>
    
    
  )
}

export default Homepage