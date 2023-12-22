import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BuyNow.css';
import minusImg from "./../../assets/minus.png";
import plusImg from "./../../assets/plus.png";

function BuyNow() {

  const { _id } = useParams();

  const [mobile, setMobile] = useState({})
  const [quantity, setQuantity] = useState(1);
  const [shippingAddress, setShippingAddress] = useState('');
  const [charges, setCharges] = useState('50');

  const loadProduct = async () => {
    const response = await axios.get(`/api/v1/mobile/${_id}`);

    setMobile(response?.data?.data);
  }

  useEffect(() => {
    loadProduct();
  })

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }
  const decrementQuantity = () => {
    if (quantity === 1) {
      return
    }
    setQuantity(quantity - 1)
  }

  const placeOrder = async () => {

    const orderDetails = {
      mobile:_id,
      shippingAddress:shippingAddress,
      deliveryCharge:charges,
      quantity:quantity
    }
    
    const response = await axios.post('/api/v1/orders',orderDetails);
    alert(response?.data?.message);
  }

  return (
    <div>
      <Navbar />
      <div className='flex product-container'>
        <div> 
          <img src={mobile.image} className='img-mobile'/>
        </div>
        <div className='info-taxt'>
          <p className='text-3xl mt-12 text-black'>{mobile.name}</p>
          <p className='text-2xl mt-4 text-black'>{mobile.memory}</p>
          <p className='text-xl'>{mobile.discription}</p>
          <p className='product-brand'><span className='brand-text'>Processor</span> {mobile.processor}</p>
          <p className='product-price'><span className='price-text'>Rs. ₹</span> {mobile.price}</p>

          <p className='quantity-text'>Quantity:
            <span
              onClick={incrementQuantity}>
                <img src={plusImg} className='mt-2 ms-2'/>
            </span>

            <span className='quantity'>{quantity}</span>

            <span onClick={decrementQuantity}>
                <img src={minusImg} className='mt-2' />
            </span>
          </p>

          
          <div className='delivery-text'>
            <input 
            
            type='radio'
            name='charges'
            checked = {charges === '40'}
            onClick={()=>{
              setCharges('40')
            }}
            /> Regular Delivery 

            <input 
            className='ms-2'
            type='radio'
            name='charges'
            checked = {charges === '100'}
            onClick={()=>{
              setCharges('100')
            }}/> Fastest Delivery 
          </div>

          <input type='text'
            placeholder='Enter Shipping Address'
            className='input-product-address'
            value={shippingAddress}
            onChange={(e) => {
              setShippingAddress(e.target.value)
            }}
          />

          <button type="button"
            className='btn btn-place-order'
            onClick={placeOrder}>
            Place Order</button>
        </div>

      </div>


    </div>

  )
}


export default BuyNow
