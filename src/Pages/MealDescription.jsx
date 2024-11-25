import { useNavigate, useParams } from "react-router"
import { useApiHooks } from "../hooks/apiHooks"
import { useState } from "react";
import { Button } from "@material-tailwind/react";

const MealDescription = () => {
    const [play,setPlay]=useState(false);
    const [count,setCount] =useState(0);
const {id} = useParams()
    const {data,load,err} = useApiHooks('https://www.themealdb.com/api/json/v1/1/lookup.php',{
        i: id
    })
    console.log(data)
const nav = useNavigate();
    const handleClick=()=>{
        setCount(count + 1);
        if(count===0){
            setPlay(true);
        }
        else{
            setPlay(false);
        }
        
    }
    return (
    <div className="p-4">
        {data && data.meals.map(({idMeal,strMeal,strInstructions,strYoutube,strMealThumb})=>{
           return <div>
           <div className="flex justify-around gap-10 p-4" key={idMeal}>
                <img src={strMealThumb} className="h-[300px]   rounded-2xl shadow-lg border-blue-gray-500 " alt="" />
                <div className="mt-4">
                    <h1 className="font-bold text-3xl ">{strMeal}</h1>
                    <p className="mt-4 text-justify font-monospace">{strInstructions}</p>
                    <div className="flex justify-center items-center mt-4">{count>=1?<Button className="m-4" ><a href={strYoutube} target="_blank">Watch On Youtube</a></Button>:
                    <Button className="m-4" onClick={()=>handleClick()}>Watch Video</Button>}
                    </div>
                </div>
            </div>

                {
                play &&<div className="relative w-full mt-2 mb-4 shadow-2xl "style={{paddingTop: "56.25%"}}>
                    <iframe 
                    src={`https://www.youtube.com/embed/${strYoutube.split('=')[1]}`}
                    className="rounded shadow-lg absolute top-0 left-0 w-full h-full" 
                    allowFullScreen
                    >
                    </iframe>
                </div>
                }
                
                    
                
        {

        }

</div>
        })}

        
    </div>
  )
}
export default MealDescription