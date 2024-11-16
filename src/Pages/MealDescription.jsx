import { useParams } from "react-router"
import { useApiHooks } from "../hooks/apiHooks"

const MealDescription = () => {
const {id} = useParams()
    const {data,load,err} = useApiHooks('https://www.themealdb.com/api/json/v1/1/lookup.php',{
        i: id
    })
    return (
    <div className="p-4">
        {data && data.meals.map(({idMeal,strMeal,strInstructions,strYoutube})=>{
           return <div className="flex justify-around gap-10 " key={idMeal}>
                <div className="">
                    <iframe width="420" height="315"
                        src={`https://www.youtube.com/embed/${strYoutube.split('=')[1]}`}>
                    </iframe>
                </div>
                <div className="">
                    <h1>{strMeal}</h1>
                    <p>{strInstructions}</p>
                </div>
            </div>

        })}
        
    </div>
  )
}
export default MealDescription