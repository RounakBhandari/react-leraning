import{ DiBootstrap, DiCss3, DiDjango,  DiHtml5, DiJavascript, DiNodejs, DiPython, DiReact } from "react-icons/di"
export const Tech = () => {
  return (
      <div className="bg-slate-200 pt-10 pb-20">
        <h1 className="text-center text-4xl font-semibold p-3 underline underline-offset-8 m-3 text-slate-500 select-none">My Skills</h1>
            <div className="grid grid-cols-4 place-items-center gap-10 gap-y-16">
          <DiHtml5 size={200} className="hover:scale-150 ease-in duration-300 text-orange-500 hover:text-orange-600 cursor-pointer"/>
          <DiCss3  size={200} className="hover:scale-150 ease-in duration-300 text-blue-500 hover:text-blue-800 cursor-pointer"/>
          <DiJavascript  size={200} className="hover:scale-150 ease-in duration-300 text-yellow-500 hover:text-yellow-600 cursor-pointer"/>
          <DiNodejs size={200} className="hover:scale-150 ease-in duration-300 text-green-600 hover:text-green-700 cursor-pointer"/>
          <DiPython  size={200} className="hover:scale-150 ease-in duration-300 text-blue-500 hover:text-blue-800 cursor-pointer"/>
          <DiDjango  size={200} className="hover:scale-150 ease-in duration-300 cursor-pointer"/>
          <DiReact size={200} className="hover:scale-150 ease-in duration-300 text-blue-500 hover:text-blue-800 cursor-pointer"/>
          <DiBootstrap size={200}className="hover:scale-150 ease-in duration-300 text-violet-700 hover:text-violet-800 cursor-pointer"/>
              </div>
      </div>
  )
}
