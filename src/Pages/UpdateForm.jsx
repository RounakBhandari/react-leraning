import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react"
import { useFormik} from "formik";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, useParams } from "react-router";
import * as Yup from "yup";
import {  updateUser } from "../redux/userSlice";
const formSchema = Yup.object({
    username: Yup.string().required('Username is Required').min(5,'Username must be more than 5 characters').max(20,'Username cannot exceed 20 characters')  ,
    mail: Yup.string().required('Mail Address is Required').matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,"Enter a valid mail"),
    gender: Yup.string().required('Required'),
    hobby: Yup.array().min(1,'At least one hobby is Required'),
    country: Yup.string().required('This cannot be empty'),
    message: Yup.string().required('Required').min(5,'Must exceed 5 characters'),
  });



const UpdateForm = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();  
    const {users} = useSelector((state)=>state.userSlice)
    const existUser = users.find((user)=>user.id === id);
    const {values, errors , handleChange, handleSubmit,touched, setFieldValue} = useFormik({
        initialValues:{
            username: existUser.username ,
            mail: existUser.mail,
            gender: existUser.gender,
            hobby: existUser.hobby,
        country: existUser.country,
        message: existUser.message,
    },
      onSubmit: (val)=>{
        val.id = id; //adds the id of the user to be updated to the val object which will be compared in the updateUser reducer
        dispatch(updateUser(val)); // dispatching the updateUser action
        setTimeout(() => {
            nav('/',{state: val});
            
        }, 1000);
    },
      validationSchema: formSchema,
    })
return (
    <div className=" p-4 flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold underline mb-2">Update Form</h1>
      <form className=" space-y-1 p-5 rounded-lg border-solid border-2 border-gray-400 " onSubmit={handleSubmit} >
        <Input label="Username" name="username" onChange={handleChange} value={values.username}/> <p className="text-red-800 font-sans text-xs">{touched.username && errors.username}</p>  
        <Input label="Email" name="mail" onChange={handleChange} value={values.mail} /> <p className="text-red-800 font-sans text-xs">{touched.mail && errors.mail}</p>
        <Typography>Select your Gender</Typography> <p className="text-red-800 font-sans text-xs">{touched.gender && errors.gender}</p>
        <Radio label="Male" value={'Male'} name="gender" onChange={handleChange} checked={values.gender === 'Male'}/>
        <Radio label="Female" value={'Female'} name="gender" onChange={handleChange} checked={values.gender === 'Female'} />
        <Typography>Select your Hobbies</Typography><p className="text-red-800 font-sans text-xs">{touched.hobby && errors.hobby}</p>
        <Checkbox label="Dance" value={'Dance'} name="hobby" onChange={handleChange} checked={values.hobby.includes('Dance')} />
        <Checkbox label="Sing" value={'Sing'} name="hobby" onChange={handleChange} checked={values.hobby.includes('Sing')}  />
        <Checkbox label="Draw" value={'Draw'} name="hobby" onChange={handleChange} checked={values.hobby.includes('Draw')}  />
        <Checkbox label="Code" value={'Code'} name="hobby" onChange={handleChange} checked={values.hobby.includes('Code')}  />
        <Select label="Select your Country" name="country" value={values.country} onChange={(e)=>setFieldValue('country',e)}>
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
export default UpdateForm