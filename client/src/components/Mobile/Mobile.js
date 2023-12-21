import React from 'react'
import "./Mobile.css";
import { Link } from 'react-router-dom';

function Mobiles({_id,  price, name,type, processor, memory, OS,image}) {

  return (
    <div className='h-84 w-72 shadow-xl m-4 p-4 bg-white'>
    
     <img src={image} className='h-64 w-44 block mx-auto'/>
      <h3 className='text-xl font-bold text-center'>{name}</h3>
      <h4 className='text-lg text-red-500 font-bold ms-4'>Rs. ₹ {price} </h4>
      {/* <p className='prard-discr'>{processor}</p> */}
      <p className='text-lg text-zinc-950 ms-4 h-20'>{memory} </p>
      
      <Link to={`/buy/${_id}`}><button className='mt-2 h-18 px-3 py-2 rounded-lg text-white font-bold bg-red-600 border-solid block mx-auto'>View More..</button></Link>
    </div>
  )
}

export default Mobiles