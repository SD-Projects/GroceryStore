import "../../css/CSS_mainnav-bar.css"
import { useState, useEffect } from "react";
import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci"
import jwt_decode from "jwt-decode";
import LogOutBtn from "../Buttons/LogOutBtn";
import LogInBtn from "../Buttons/LogInBtn";
import SideBarCart from "../SideBarCart/SideBarCart";

const MainNavBar = ({ info }) => {

  let user
  if (localStorage.user != undefined) {
    user = JSON.parse(localStorage.user).name
  }

  const [toggleSidebar, setToggleSidebar] = useState(false)

  const openSideCart = () => {
    setToggleSidebar(!toggleSidebar)
  }

  return (
    <>
      <div className="w-4/5 h-20 bg-green-900 rounded-md mx-auto pl-5 flex justify-between">
        <div className="flex items-center	h-full">
          <div className="pr-8">
            <button className="text-white bg-orange-400 text-xs py-2 px-2 rounded-sm">CATEGORIES</button>
          </div>

          <ol className="text-xs text-white list-none flex mb-0">
            <li className="mr-5">HOME</li>
            <li className="mr-5">SHOP</li>
            <li className="mr-5">PRODUCTS</li>
            <li className="mr-5">CONTACT</li>
          </ol>
        </div>

        <div className="flex items-center	h-full">
          <div className="flex flex-row pr-5">
            <div className="flex">
              <BsTelephone size={"1.5em"} color="white" />
              <div className="flex flex-col">
                <span className="text-amber-500 text-xs">Call Anytime</span>
                <span className="text-white text-sm">800 300 2323</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row pr-5">
            <div className="flex">
              <div className="flex flex-col">
                <span className="text-amber-500 text-xs">Your Location</span>
                <span className="text-white text-sm">Select a location</span>
              </div>
            </div>
          </div>

          <div className="bg-green-600 h-full w-52 rounded-r-md">
            <div className="flex items-center h-full pl-8">
              <CiDiscount1 size={"1.5em"} color="white" />
              <div className="flex flex-col">
                <span className="text-amber-500 text-xs">Only This Weekend</span>
                <span className="text-white text-sm">Super Discount</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default MainNavBar