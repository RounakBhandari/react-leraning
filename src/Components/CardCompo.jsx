import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useNavigate } from "react-router";
   
  export function CardCompo(props) {
    const {imgUrl , category,description} =props;
    const nav = useNavigate();
    return (
      <Card className="mt-6 w-96">
        <CardHeader   className="relative h-56 bg-amber-50">
          <img
            src={imgUrl}
            alt="card-image"
            className="w-full h-full"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {category}
          </Typography>
          <p className="line-clamp-4"> 
            {description}
          </p>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={()=>{
            nav(`/categories/${category}`)
          }}>Read More</Button>
        </CardFooter>
      </Card>
    );
    
  }
