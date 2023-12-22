import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Mobiles from "../../components/Mobile/Mobile";
import axios from 'axios'
import './Home.css';


function Home() {
  const [mobiles, setMobiles] = useState([])
  const [search, setSearch] = useState('')

  const loadProduct = async () => {
    const response = await axios.get('/api/v1/mobiles')
    setMobiles(response?.data?.data)
    console.log(response?.data?.data)
  }
  useEffect(() => {
    loadProduct()

  }, [])

  const searchMobile = async ()=>{
    if(search === ''){
      loadProduct();
      return;
    }
    
    
    const response = await axios.get(`/api/v1/searchOrders?q=${search}`);
    setMobiles(response?.data?.data);
    }
    useEffect(()=>{
    searchMobile();
    },[search])


  return (
    <>
    <div className="bg-gray-100"> 
      <Navbar />
      <h1 className="text-center text-2xl mt-5">All Collections</h1>
      <input type='text'
       placeholder='Search'
        className='search-bar'
        value={search}
        onChange={(e)=>{
          setSearch(e.target.value)
        }}/> 

      <div className="flex justify-evenly flex-wrap mt-4">
      {
        mobiles.map((mobile, i) => {
          const {_id,  price, name,type, processor, memory, OS,image} = mobile;

          return<Mobiles 
          
          image={image}
          key={i}
          price={price}
          name={name}
          type={type}
          processor={processor}
          memory={memory}
          OS={OS}
          _id={_id}
         
          />
        }
        )
      }
      </div>
      </div>

  </>
  )
  }
export default Home