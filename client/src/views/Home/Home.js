import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Mobiles from "../../components/Mobile/Mobile";
import axios from 'axios'



function Home() {
  const [mobiles, setMobiles] = useState([])

  const LoadAllMobile = async () => {
    const response = await axios.get('/api/v1/mobiles')
    setMobiles(response?.data?.data)
    console.log(response?.data?.data)
  }
  useEffect(() => {
    LoadAllMobile()

  }, [])
  return (
    <>
    <div className="bg-gray-100"> 
      <Navbar />
      <h1 className="text-center text-2xl mt-5">All Collections</h1>
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