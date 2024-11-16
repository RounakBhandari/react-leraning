import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";
import { useNavigate } from "react-router";
   
  export function Lists(props) {
    const {img, meal, id} = props;
    const nav = useNavigate();
    console.log(id)
    return (
      <Card className="w-96">
        <List onClick={()=>nav(`/detail/${id}`)}>
          <ListItem>
            <ListItemPrefix>
              <Avatar variant="circular" alt="candice" src={img} />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                {meal}
              </Typography>
            </div>
          </ListItem>
        </List>
      </Card>
    );
  }