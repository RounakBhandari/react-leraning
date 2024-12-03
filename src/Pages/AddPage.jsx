import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react"
import { useFormik} from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { addUser } from "../redux/userSlice";
import { nanoid } from "@reduxjs/toolkit";
const AddForm = () => {

    const dispatch = useDispatch(); //useDispatch is used to dispatch the action (i.e, calling the action creator) 
    const nav = useNavigate();    
  
   //Yup is used to validate the form which is stored in formSchema 
  const formSchema = Yup.object({
    username: Yup.string().required('Username is Required').min(5,'Username must be more than 5 characters').max(20,'Username cannot exceed 20 characters')  ,
    mail: Yup.string().required('Mail Address is Required').matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,"Enter a valid mail"),
    gender: Yup.string().required('Required'),
    hobby: Yup.array().min(1,'At least one hobby is Required'),
    country: Yup.string().required('This cannot be empty'),
    message: Yup.string().required('Required').min(5,'Must exceed 5 characters'),
  });

  //useFormik is used to handle the form easily. 
  const {values, errors , handleChange, handleSubmit,touched, setFieldValue} = useFormik({
    initialValues:{ //initial values of the form
        username: '',
        mail: '',
        gender: '',
        hobby: [],
        country: '',
        message:''
    },
      onSubmit: (val)=>{ //onSubmit is called when the form is submitted and val is the values of the form when submitted
        val.id= nanoid(); //adding random id using nanoid function which generates unique id for each submission.
        dispatch(addUser(val)); //dispatching the addUser action
        setTimeout(() => { 
            nav('/',{state: val}); //navigating to home page after 1.5 seconds for a smooth transition
            
        }, 1500);
    },
      validationSchema: formSchema, //declaring the validation schema
  })
return (
    <div className=" p-4 flex flex-col items-center  justify-center ">
      <h1 className="text-3xl font-bold underline mb-2">Add Form</h1>
      <form className=" space-y-1 p-5 rounded-lg border-solid border-2 border-gray-400 " onSubmit={handleSubmit} >
        <Input label="Username" name="username" onChange={handleChange}/> <p className="text-red-800 font-sans text-xs">{touched.username && errors.username}</p>  
        <Input label="Email" name="mail" onChange={handleChange} /> <p className="text-red-800 font-sans text-xs">{touched.mail && errors.mail}</p>
        <Typography>Select your Gender</Typography> <p className="text-red-800 font-sans text-xs">{touched.gender && errors.gender}</p>
        <Radio label="Male" value={'Male'} name="gender" onChange={handleChange}/>
        <Radio label="Female" value={'Female'} name="gender" onChange={handleChange} />
        <Typography>Select your Hobbies</Typography><p className="text-red-800 font-sans text-xs">{touched.hobby && errors.hobby}</p>
        <Checkbox label="Dance" value={'Dance'} name="hobby" onChange={handleChange}/>
        <Checkbox label="Sing" value={'Sing'} name="hobby" onChange={handleChange}/>
        <Checkbox label="Draw" value={'Draw'} name="hobby" onChange={handleChange}/>
        <Checkbox label="Code" value={'Code'} name="hobby" onChange={handleChange}/>
        <Select label="Select your Country" name="country" onChange={(e)=>setFieldValue('country',e)}>
          <Option value="Nepal">Nepal</Option>
          <Option value="India">India</Option>
          <Option value="Pakistan">Pakistan</Option>
          <Option value="China">China</Option>
          <Option value="Japan">Japan</Option>
        </Select>
        <p className="text-red-800 font-sans text-xs">{touched.country && errors.country}</p>
        <Textarea label="Enter your words..." value={values.message} name="message" onChange={handleChange} /><p className="text-red-800 font-sans text-xs">{touched.message && errors.message}</p>
        <div className="flex justify-center"><Button  type="submit" className="w-full ">Submit</Button></div>
      </form>
    </div>
)
}
export default AddForm