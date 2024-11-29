import { useSelector } from "react-redux"

const Homepage = () => {

  const d = useSelector((state)=>state.userSlice.users)

  
  return (
    <div className="p-4 ">
      {d && d.map(({username})=>{
        return <p>{"Welcome " +username}</p>
})}
    </div>
  )
}
export default Homepage