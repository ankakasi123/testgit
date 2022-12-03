/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";


export default function HeaderComponent() {
  const navigate = useNavigate();
    const authState = useSelector(state=>state.auth);
    console.log('authState',authState)

    const side = authState.user;
    const price = side.price;
  const resultPrice = price ? price.toLocaleString('en-US') : price;
    // const head = authState.user;
    const hiden = () => {
        if(authState.isLogin === true){
            return 'hidden' 
        }
    }
    const hidenLogin = () => {
      if(authState.isLogin === false){
          return 'hidden' 
      }
  }

  return (
    <div className="p-4 bg-gray-700 text-slate-50 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="home"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img src="img/logo.svg" alt="logo" width={80} />

        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to=""
              className="flex items-center hover:no-underline px-4 -mb-1 border-b-2 hover:bg-green-300 cursor-pointer dark:border-transparent dark:text-violet-400 dark:border-violet-400"
            >
              Trang Chủ
            </NavLink>
          </li>
          <li className="flex">
            <span
            onClick={() => {
              // const cs = side.chiSo;
              if(authState.isLogin === false){
                return navigate("/register")
              }else if(side.vip > 1 && side.chiSo < 1){
                alert(`Hôm nay bạn "${side.name}" đã xem video rồi vui lòng quay lại sau 24h`)
              }else if (side.vip <= 1) {
                alert("Bạn cần nâng cấp vip để tham gia")
                return navigate("/dangkivip");
              } else {
                navigate("/xemquangcao");
              }
            }}
              className="flex items-center hover:text-blue-800 hover:bg-green-300 cursor-pointer px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Xem Quảng Cáo(<span className="text-red-500">{side.chiSo}</span>
                )
            </span>
          </li>
          <li className="flex">
            <div
            onClick={()=>{
              if(authState.isLogin === false){
                return navigate("/register")
              } else{
                navigate("/dangkivip")
              }
            }}
              className="flex items-center hover:text-blue-800 hover:no-underline hover:bg-green-300 cursor-pointer px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Đăng Kí ViP: <span className="text-red-400"> VIP{side.vip -1}</span>
            </div>
          </li>
          <li className="flex">
            <div
            onClick={()=>{
              if(authState.isLogin === false){
                return navigate("/register")
              }else{
                navigate("/ruttien")
              }
            }}
              className="flex items-center hover:text-blue-800 hover:no-underline hover:bg-green-300 cursor-pointer px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Rút Tiền
            </div>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <NavLink
            to="/login"
            className={`self-center px-8 py-3 rounded bg-orange-300 ${hiden()}`}
          >
            Đăng Nhập
          </NavLink>
          <NavLink
            to="/register"
            className={`ml-2 self-center px-8 py-3 font-semibold rounded bg-orange-300 dark:bg-violet-400 dark:text-gray-900 y ${hiden()}`}
          >
            Đăng Kí
          </NavLink>
          {/* <NavLink
            to="/register"
            className={`ml-2 self-center px-8 py-3 font-semibold rounded bg-orange-300 dark:bg-violet-400 dark:text-gray-900 y`}
          >
            Đăng Kí
          </NavLink> */}
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {/* thong tin chi tiết */}
        <div className={`flex items-center p-2 space-x-4 mr-6 ${hidenLogin()}`}>
        <div>
        <img onClick={()=>{alert(`avatar động nhằm nâng cao bảo mật cho tài khoản của bạn: ${side.name}`)}}
          src="https://source.unsplash.com/100x100/?portrait"
          alt=""
          className="w-12 relative h-12 rounded-full dark:bg-gray-500"
        />
        <div className="absolute hidden">Đăng xuất</div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">{side.name}</h2>
          <span className="flex items-center space-x-1">
            <p className="text-yellow-600 hover:underline dark:text-gray-400">
              {resultPrice} <img src="/img/coin.png" alt="coin" width={15} style={{display:"inline"}} /> <br/> vip: <img src={`/img/${side.vip}.png`} alt={side.vip} width={22} style={{display:"inline"}} />
              {/* {(side.price.toLocaleString())} */}
            </p>
          </span>
        </div>
      </div>
      </div>
    </div>
  );
}
