import { useSelector } from "react-redux"
import CardCompo from "../Components/CardCompo"

const Homepage = () => {

  const {users} = useSelector((state)=>state.userSlice) //gets the users array from the store

  return (
    <div className="p-4 ">
     {users.map((user,index)=>{
        return <CardCompo index={index} key={user.id} user={user}/>  //sending the user object to CardCompo as props
})}
    </div>
  )
}
export default Homepage