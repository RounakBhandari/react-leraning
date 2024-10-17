import React, {useState} from 'react'

import { faker } from '@faker-js/faker'


const Homepage = () => {
    const [posts, setPosts] = useState([])
    const  addPosts = () =>{
        const  newFood = {
            title: faker.food.dish(),
            detail: faker.food.description(),
            image: faker.image.urlPicsumPhotos(),
            id: faker.string.uuid()

        }
        setPosts((prev)=> [...prev, newFood])
    }
    const deletePost = (id) =>{
        
    window.confirm('The post will be deleted permanently. Would you like to continue?') && setPosts((prev)=> prev.filter((post)=>post.id!==id))
        
    }
    return (
    <div className='p-5 m-3 '>
        <button onClick={addPosts} className='bg-slate-400 py-2 px-3 text-blue-950 font-semibold m-3 rounded'>Click To Add</button>
        <div className=' grid grid-cols-3 gap-2 '>
         
            {posts.map(post => {
        return(            
            <div key={post.id}  className='h-max  p-3 w-[400px] flex flex-col   bg-slate-400 rounded items-center content-center font-sans'>
            <img src={post.image} alt={`${post.title}`} className='w-[300px] h-[300px] object-cover rounded '/>
            <h1 className='mt-2 font-semibold'>{post.title}</h1>
            <p className='p-5 font-extralight'>{post.detail}</p>
            <button className='bg-red-600 text-white px-3 py-2 rounded ' onClick={()=>deletePost(post.id)}>Delete</button>
         </div>
       
  );
}
        )
        
    }
        </div>
    </div>
  )
}

export default Homepage

