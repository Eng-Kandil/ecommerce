import React, { useContext, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/freshcart-logo.svg";
import { numItem } from "../Context/NumberCartContext";
import { userToken } from "../Context/UserToken";


export default function Navbar() {

  let { isLogin, setLogin } = useContext(userToken);

  let {cartNum} = useContext(numItem)

  let ref = useRef(null)

  let navigate = useNavigate();


  function logout() {
    localStorage.removeItem("token");
    setLogin(null);
    navigate("/");
  }

  useEffect(()=>{
    if(localStorage.getItem('theme')){
      document.body.classList.add('dark')
      ref.current.checked=true
    }
  },[])

  function toggleMe() {
    let body=document.body;
    if(ref.current.checked){
      body.classList.add('dark')
      localStorage.setItem('theme','dark')
    }
    else{
      body.classList.remove('dark')
      localStorage.removeItem('theme')
    }
  }

  return (
    <nav className="bg-light-color border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap justify-between lg:justify-start items-center mx-auto p-4">
        <Link
          to="/"
          className="flex w-[20%] items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className=" bg-light-color" alt="" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden lg:flex lg:justify-between w-[80%] "
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0  dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm lg:p-0 dark:text-white ${
                    isActive ? "text-green-500" : "text-gray-500"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm lg:p-0 dark:text-white ${
                    isActive ? "text-green-500" : "text-gray-500"
                  }`
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                `block py-2 px-3 rounded-sm lg:p-0 dark:text-white ${
                  isActive ? "text-green-500" : "text-gray-500"
                }`
              }
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brands"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm lg:p-0 dark:text-white ${
                    isActive ? "text-green-500" : "text-gray-500"
                  }`
                }
              >
                Brands
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wishList"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm lg:p-0 dark:text-white ${
                    isActive ? "text-green-500" : "text-gray-500"
                  }`
                }
              >
                Wish list
              </NavLink>
            </li>
            {isLogin && (
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm lg:p-0 dark:text-white ${
                    isActive ? "text-green-500" : "text-gray-500"
                  }`
                }
                >
                  <i className="fa-solid fa-shopping-cart me-2"></i>
                   {cartNum}
                </NavLink>
              </li>
            )}
            
          </ul>
          <ul
            className="font-medium flex flex-col p-4 lg:p-0 mt-4 lg:flex-row
       lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 
        dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700"
          >
            {isLogin ? (
              <li onClick={logout}>
                <span
                  className="block py-2 px-3 text-gray-500 rounded-sm 
          lg:bg-transparent  lg:p-0 dark:text-white"
                >
                  logout
                </span>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="block py-2 px-3 text-gray-500 rounded-sm 
          lg:bg-transparent  lg:p-0 dark:text-white"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="block py-2 px-3 text-gray-500 rounded-sm 
          lg:bg-transparent  lg:p-0 dark:text-white"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-500 rounded-sm 
          lg:bg-transparent  lg:p-0 dark:text-white"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-500 rounded-sm 
          lg:bg-transparent  lg:p-0 dark:text-white"
              >
                <i className="fa-brands fa-google"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-500 rounded-sm 
          lg:bg-transparent  lg:p-0 dark:text-white"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                ref={ref}
                onChange={toggleMe}
                class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                for="toggle"
                class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <label for="toggle" class="text-xs text-gray-700">
              
            </label>
          </ul>
        </div>
      </div>
    </nav>
  );
}
