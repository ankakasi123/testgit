/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export default function HeaderComponent() {
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  const side = authState.user;
  const user = authState.user;
  const price = side.price;
  const resultPrice = price ? price.toLocaleString("en-US") : price;
  // const head = authState.user;
  const hiden = () => {
    if (authState.isLogin === true) {
      return "hidden";
    }
  };

  const hidenLogin = () => {
    if (authState.isLogin === false) {
      return "hidden";
    }
  };

  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <button
          className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            />
          </svg>
        </button>
        <div
          className="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent1"
        >
          <a className="flex title-font font-medium items-center text-gray-900 pr-2 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">XemQuảngCáo</span>
          </a>

          {/* Left links */}
          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <NavLink
              rel="noopener noreferrer"
              to=""
              className="flex items-center lg:h-full bg-emerald-400 rounded-sm hover:text-white ml-2 mb-2 hover:no-underline px-4 hover:bg-green-300 cursor-pointer dark:border-transparent dark:text-violet-400 dark:border-violet-400"
            >
              Trang Chủ
            </NavLink>
            <div
              onClick={() => {
                // const cs = side.chiSo;
                if (authState.isLogin === false) {
                  return navigate("/register");
                } else if (side.vip > 1 && side.chiSo < 1) {
                  alert(
                    `Hôm nay bạn "${side.name}" đã xem video rồi vui lòng quay lại sau 24h`
                  );
                } else if (side.vip <= 1) {
                  alert("Bạn cần nâng cấp vip để tham gia");
                  return navigate("/dangkivip");
                } else {
                  navigate("/xemquangcao");
                }
              }}
              className="flex items-center lg:h-full bg-emerald-400 rounded-sm hover:text-white ml-2 mb-2 hover:bg-green-300 cursor-pointer px-4 dark:border-transparent"
            >
              Xem Quảng Cáo(<span className="text-red-500">{side.chiSo}</span>)
            </div>
            <div
              onClick={() => {
                if (authState.isLogin === false) {
                  return navigate("/register");
                } else {
                  navigate("/dangkivip");
                }
              }}
              className="flex items-center lg:h-full bg-emerald-400 rounded-sm hover:text-white ml-2 mb-2 hover:no-underline hover:bg-green-300 cursor-pointer px-4 dark:border-transparent"
            >
              Đăng Kí ViP:{" "}
              <span className="text-red-400"> VIP{side.vip - 1}</span>
            </div>
            <div
              onClick={() => {
                if (authState.isLogin === false) {
                  return navigate("/register");
                }
                if(user.vip <= 1){
                  alert(`${user.name} vui lòng nâng cấp ViP để tham gia`)
                  return navigate("/dangkivip")
                }else if(user.vip === 2){
                  alert(`${user.name} vui lòng nâng cấp ViP2 để tham gia`)
                  return navigate("/dangkivip")
                }else if(user.vip === 3){
                  alert(`${user.name} vui lòng nâng cấp ViP3 để rút tiền`)
                  return navigate("/dangkivip")
                }else if(user.vip === 4){
                  alert(`${user.name} chức năng đang nâng cấp bạn vui lòng nâng cấp ViP4 rút tiền vốn`)
                  return navigate("/dangkivip")
                }else if(user.vip >= 5){
                  alert(`chức năng đang nâng cấp`)
                }else{
                  return navigate("/dangkivip")
                }
              }}
              className="flex items-center lg:h-full bg-emerald-400 rounded-sm hover:text-white ml-2 mb-2 hover:no-underline hover:bg-green-300 cursor-pointer px-4 dark:border-transparent"
            >
              Rút Tiền
            </div>
          </ul>
          {/* Left links */}
        </div>
        {/* Collapsible wrapper */}
        {/* Right elements */}
        <div className="flex items-center relative">
          {/* Icon */}
          <button
            className={`inline-flex items-center bg-orange-300 border-0 py-1 px-3 focus:outline-none hover:bg-orange-200 rounded text-base md:mt-0 ${hiden()}`}
          >
            <NavLink
              to="/login"
              className="hover:no-underline hover:text-white"
            >
              Đăng Nhập
            </NavLink>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <div
            className={`flex items-center p-2 space-x-4 mr-6 ${hidenLogin()}`}
          >
            <div className="cursor-pointer hover:opacity-60">
              <img
                onClick={() => {
                  alert(
                    `avatar động nhằm nâng cao bảo mật cho tài khoản của bạn: ${side.name}`
                  );
                }}
                src="https://source.unsplash.com/100x100/?portrait"
                alt=""
                className="w-12 relative h-12 rounded-full dark:bg-gray-500"
              />
              <div className="absolute hidden">Đăng xuất</div>
            </div>
            <div className="">
              <h2 className="text-lg font-semibold">{side.name}</h2>
              <span className="flex items-center space-x-1">
                <p className="text-yellow-600 hover:underline dark:text-gray-400">
                  {resultPrice}{" "}
                  <img
                    src="/img/coin.png"
                    alt="coin"
                    width={15}
                    style={{ display: "inline" }}
                  />{" "}
                  <br /> vip:{" "}
                  <img
                    src={`/img/${side.vip}.png`}
                    alt={side.vip}
                    width={22}
                    style={{ display: "inline" }}
                  />
                  {/* {(side.price.toLocaleString())} */}
                </p>
              </span>
            </div>
          </div>
          {/* <div className="dropdown relative">
          <a className="dropdown-toggle flex items-center hidden-arrow" href="#" id="dropdownMenuButton2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-full" style={{height: 25, width: 25}} alt loading="lazy" />
          </a>
          <ul className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0" aria-labelledby="dropdownMenuButton2">
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Action</a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Another action</a>
            </li>
            <li>
              <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Something else here</a>
            </li>
          </ul>
        </div> */}
        </div>
        {/* Right elements */}
      </div>
    </nav>
  );
}
