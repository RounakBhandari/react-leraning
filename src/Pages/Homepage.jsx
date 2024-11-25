import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react"
import { useFormik} from "formik";
import * as Yup from "yup";
const Homepage = () => {
  const formSchema = Yup.object({
    username: Yup.string().required().min(5).max(20)  ,
    mail: Yup.string().required().matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,"Enter a valid mail")
  })
  const {values, errors , handleChange, handleSubmit,touched, setFieldValue} = useFormik({
    initialValues:{
        username: '',
        mail: '',
        gender: '',
        hobby: [],
        country: '',
        message:''
    },
      onSubmit: (val)=>{
        console.log(val);
      },
      validationSchema: formSchema,
  })
return (
    <div className=" p-4 flex justify-center ">
      <form className=" space-y-1 p-5 rounded-lg border-solid border-2 border-gray-400 " onSubmit={handleSubmit} >
        <Input label="Username" name="username" onChange={handleChange}/> <p className="text-red-800">{touched.username && errors.username}</p>  
        <Input label="Email" name="mail" onChange={handleChange} /> {touched.mail && errors.mail}
        <Typography>Select your Gender</Typography>
        <Radio label="Male" value={'Male'} name="gender" onChange={handleChange}/>
        <Radio label="Female" value={'Female'} name="gender" onChange={handleChange} />
        <Typography>Select your Hobbies</Typography>
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
        <Textarea label="Enter your words..." value={values.message} name="message" onChange={handleChange} />
        <Button size="sm" type="submit">Submit</Button>
      </form>
    </div>
)
}
export default Homepage