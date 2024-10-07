import React from 'react'
import myImage from '../../Image/pp.jpg'
import { Footer } from './Footer'
export const Info = () => {
  return (
    <div className='bg-blue-50 pt-9 pb-0'>
        <h1 className='text-center font-bold text-4xl p-3 pt-9 underline underline-offset-8 text-slate-600'>My Informations</h1>
        <div className='h-[600px] w-max mx-auto grid grid-col justify-center items-center p-10 mt-5 gap-8'>


            <div className='flex flex-col h-[500px] justify-center items-center p-9 py-11 mt-8 bg-teal-400 border-[10px]  rounded-2xl'>
                <img src={myImage} alt="My" className='rounded-full w-[250px] h-[250px] object-cover   mt-[-100px] shadow-2xl shadow-slate-400 border-4  border-slate-300  hover:scale-[2] hover:shadow-slate-700 hover:shadow-3xl hover:border-blue-950 ease-in-out duration-500' />
                <table className='table-auto  mt-7 p-6  border-separate border-spacing-x-3 border-spacing-y-2 text-gray-100 font-semibold font-sans   text-[1.3em] leading-[3rem]  text-justify'>
                    <tbody>
                        <tr><td className='text-slate-700'>Name:</td><td>Rounak Bhandari</td></tr>
                        <tr><td className='text-slate-700'>Age: </td><td>18</td></tr>
                        <tr><td className='text-slate-700'>Phone:</td><td>9864444623</td></tr>
                        <tr><td className='text-slate-700'>Email: </td><td>bhandarirounak38@gmail.com</td></tr>
                    </tbody>
                </table>
            </div>

            
        </div>
       <Footer/>
    </div>
  )
}
