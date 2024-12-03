import { IconButton } from "@material-tailwind/react"
import { DialogPage } from "./Dialog"
import { useNavigate } from "react-router"

const CardCompo = ({user, index}) => {
   const nav = useNavigate();
  return (
    <div>
        <h1>{user.username}</h1>
        <p>{user.mail}</p>
        <div className="flex gap-2">
            <IconButton onClick={()=>nav(`/updateform/${user.id}`)}> {/*navigating to UpdateForm.jsx when edit button is clicked and also passes the id of the user to be updated*/}
                  <i className="fas fa-edit ml-1" />
                </IconButton> 
        <DialogPage index={index} />
        </div>
    </div>
  )
}
export default CardCompo