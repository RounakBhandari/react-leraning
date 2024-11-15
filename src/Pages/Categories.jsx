import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { CardCompo } from "../Components/CardCompo";
import { Progress } from "@material-tailwind/react";
const Categories = () => {
  
    const [load, setLoad] = useState(false);
    const [err, setErr] = useState();
    const [data, setData] = useState();
    const [progress, setProgress] =useState(0);
    
      const getData = async () => {
        setLoad(true)
        
            try {
                let currentProgress = 10;
                setProgress(currentProgress);
                const interval = setInterval(() => {
                    currentProgress += 10;
                    if (currentProgress >= 80) {
                        clearInterval(interval);
                        setProgress(80);
                    } else {
                        setProgress(currentProgress);
                    }
                }, 50);
        
                // Fetch data
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
                setData(response.data);

                setTimeout(() => {
                    let finalProgress = 80;
                    const finalInterval = setInterval(() => {
                        finalProgress += 5;
                        if (finalProgress >= 100) {
                            clearInterval(finalInterval);
                            setProgress(100);
                            setLoad(false);
                        } else {
                            setProgress(finalProgress);
                        }
                    }, 50);
                }, 100);
        } catch (err) {
          setLoad(false )
          setErr(err.message);
        }
      }
    
      useEffect(()=>{
        getData();
      },[])
    
      if(load){

        return <div  className="w-full px-14 -mt-1"> <Progress value={progress} color="blue"  size="sm"/></div>
      }
    
      if(err){
        console.log(err)
    
        return <h1>There's some error</h1>
      }
    console.log(data)
      return (
        <div className="grid grid-cols-3 gap-5 p-5">
    
    
    {data && data.categories.map(({idCategory, strCategory, strCategoryDescription, strCategoryThumb},i)=>{
      return <CardCompo key={idCategory} category={strCategory} description ={strCategoryDescription} imgUrl={strCategoryThumb} />
    })}
    
        </div>
      )
}
export default Categories