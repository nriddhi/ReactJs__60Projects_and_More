import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function () {
  return (
 <>
    <div className="admin full-dark theme-black">
            <Header></Header>
            <Sidebar></Sidebar>
            <Outlet />
            </div>
 </>
  )
}
