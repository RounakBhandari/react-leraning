    import { useNavigate } from "react-router";
    import { useApiHooks } from "../hooks/apiHooks";
import rA from "../data/randomArea";

    export function Pictures() {

      
        const {data} = useApiHooks('https://www.themealdb.com/api/json/v1/1/filter.php',{a: rA.strArea});

        const nav = useNavigate();
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-7 ">
            {data && data.meals.slice(0,16).map(({ strMealThumb, idMeal }) => (
            <div key={idMeal} className="hover:scale-105 transition-all ease-in-out duration-300">
                <img
                className="rounded-lg object-cover object-center h-60"
                src={strMealThumb}
                alt={`Meal ${idMeal}`}
                onClick={()=>{nav(`/detail/${idMeal}`)}}
                />
            </div>
            ))}
        </div>
        );      
    }

