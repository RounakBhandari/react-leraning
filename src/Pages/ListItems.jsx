import { useParams } from "react-router";
import { useApiHooks } from "../hooks/apiHooks";
import { Spinners } from "../Components/Spinner";
import { Lists } from "../Components/List";

const ListItems = () => {
const {category} = useParams()

    const {data,load,err} = useApiHooks('https://www.themealdb.com/api/json/v1/1/filter.php',{c:category})

if(load)
{
    return <Spinners/>
}
else if(err){
    return <div>{err}</div>
}
else{    return (
    <div className="grid grid-cols-3 gap-5 p-3 m-4 ml-10">
        {data && data.meals.map(({strMeal,strMealThumb, idMeal})=>{
            return <div key={idMeal} >
                <Lists img={strMealThumb} meal={strMeal} id={idMeal}/>
            </div>
        })}
    </div>  
  )
}
}
export default ListItems