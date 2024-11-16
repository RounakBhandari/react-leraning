import { CardCompo } from "../Components/CardCompo";
import { Spinners } from "../Components/Spinner";
import { useApiHooks } from "../hooks/apiHooks";
const Categories = () => {
  
   const {data, load, err} = useApiHooks('https://www.themealdb.com/api/json/v1/1/categories.php')
   if(load){
    return <Spinners/>
   } 
   else{  
      return (
        <div className="grid grid-cols-3 gap-5 p-5">
    
    
    {data && data.categories.map(({idCategory, strCategory, strCategoryDescription, strCategoryThumb},i)=>{
      return <CardCompo key={idCategory} category={strCategory} description ={strCategoryDescription} imgUrl={strCategoryThumb} />
    })}
    
        </div>
      )
    }
}
export default Categories