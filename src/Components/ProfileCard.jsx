import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
 
export function ProfileCard() {
  return (
    <Card className="w-96" >
      <CardHeader floated={false} className="h-80 bg-primary-dark  ">
        <img src="/images/me.jpg" alt="profile-picture" className="object-cover w-full h-full"  />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="secondary" className="mb-2">
          Rounak Bhandari 
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          Student / Programmer
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2 ">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="https://www.facebook.com/hello.buddy.8"
            variant="lead"
            target="_blank"
            color="blue"
            textGradient
            className=""
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Subscribe">
          <Typography
            as="a"
            href="https://www.youtube.com/@rbtech8678?sub_confirmation=1"
            variant="lead"
            target="_blank"
            color="red"
            textGradient
          >
            <i className="fab fa-youtube" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="https://www.instagram.com/rounak.bhandari789/"
            target="_blank"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}