/* eslint-disable no-restricted-globals */
import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function XemQuangCao() {
  const navigate = useNavigate();
  const authState = useSelector(state=>state.auth);

  console.log('authState',authState)
  // const head = authState.user;
 
      if(authState.isLogin === false){
          
          return navigate("/home")
      }



 

  let priceGet = authState.user.price;
  let chiSo = authState.user.chiSo;

  const haiMuoi = 20000;
  const chiSoGet = -1;

  const submit = () => {
    setTimeout(async function(){
      let priceUpdate = priceGet + haiMuoi
      let chiSoUpdate = chiSo + chiSoGet


      const headers = { 
        'token': authState.userToken,
      };
      const article = await { "price": priceUpdate, "chiSo": chiSoUpdate  };
      await axios.put('users/login/price/user', article, { headers })
      alert(`Chúc mừng bạn ${authState.user.name} được cộng: ${haiMuoi} VNĐ`);
      navigate("/");
      location.reload();
      return false
      
  }, 6000);



    let x = document.getElementById("timeo");
      setTimeout(function(){ x.value="1 seconds" }, 1000);
      setTimeout(function(){ x.value="2 seconds" }, 2000);
      setTimeout(function(){ x.value="3 seconds" }, 3000);
      setTimeout(function(){ x.value="4 seconds" }, 4000);
      setTimeout(function(){ x.value="5 seconds" }, 5000);
      
  }
  return (
    <div className='container pt-5'>
      <div className='col h-screen container flex-row'>
      <p className='text-red-700 mb-3 text-2xl ml-5'>nhấn nút xem video để được cộng tiền</p>
    <iframe className="justify-center lg:w-8/12 lg:h-3/5 sm:w-10/12 sm:h-2/5" src="https://www.youtube.com/embed/ao-__TAIPig?start=40" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    
      <button onClick={()=>{
        submit()
      }} className='ml-2 mt-4 btn btn-success justify-end' >xem video</button>
      <input className='ml-8 text-red-500 bg-gradient-to-r from-violet-500 to-violet-500' type="text" id="timeo"></input>
    </div>
    </div>
  )
}
