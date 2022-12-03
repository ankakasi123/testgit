import React from "react";
import {  Outlet, } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

export default function IndexPage() {
  return (
    <HomeLayout>
        <Outlet/>
    </HomeLayout>
  );
}
