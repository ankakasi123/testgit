/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import FooterComponent from '../components/home/FooterComponent';
import HeaderComponent from '../components/home/HeaderComponent'

export default function HomeLayout(props) {
    //   const navigate = useNavigate();
const dispatch = useDispatch();
const navigate = useNavigate();
const authState = useSelector(state=>state.auth);
useEffect(()=>{
  async function getUserLogin() {
    try {
      const response = await axios.get('users/login/me', {
        headers: {
          'token': authState.userToken
        }
      })
      const user = response.data;
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: user
      })
    } catch (error) {
      if(error.response.status === 404){
        navigate('/login')
      }
    }
  } 
  getUserLogin();
}, []);



  return (
    <div>
        <HeaderComponent />
        {/* { props.children } */}
        
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 container'>
            <Outlet />
        </div>
        <FooterComponent />
    </div>
  )
}
