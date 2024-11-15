import { useParams } from "react-router";
import { useApiHooks } from "../hooks/apiHooks";

const ListItems = () => {
const {category} = useParams()

    const data = useApiHooks('https://www.themealdb.com/api/json/v1/1/filter.php',{c:category})
   console.log(data)
  return (
    <div className="grid grid-cols-3 gap-5 p-3 m-4 ml-10">
        {data && data.meals.map(({strMeal,strMealThumb, idMeal})=>{
            return <div key={idMeal} >
                <img src={strMealThumb} alt={strMeal} className="w-[200px] "/>
                <h1>{strMeal}</h1>
            </div>
        })}
    </div>
  )
}
export default ListItems