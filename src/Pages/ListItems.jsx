import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

const ListItems = () => {
const [data,setData]=useState();
const [load, setLoad] =useState(false);
const [err, setErr] = useState()

    const {category} = useParams();

    const filterCategory = async()=>{
        setLoad(true);
        try{
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php`,{
                params:{
                    c: category
                }
            });

        setData(res.data);
    setLoad(false)

    }
        catch(err){
            setLoad(false)
            setErr(err)
        }
    }
    console.log(data)
    useEffect(()=>{
        filterCategory();
    },[])

    if(load){
        return <h1>loadingg....</h1>
    }
    if(err){
       return <h1>{err.message}</h1>
    }

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