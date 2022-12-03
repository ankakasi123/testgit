/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function NavComponent() {

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
  }, [])

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item d-none d-sm-inline-block">
          <button type="button" className="btn btn-primary">
            Logout
          </button>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-3">
          <p className="btn btn-success">{authState.user.type}</p>
        </li>
      </ul>
    </nav>
  );
}
