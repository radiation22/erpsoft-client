import React from "react";
import StartDash from "./StartDash";
import { useState } from "react";
import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";
import Package from "../../Components/Packages/Package";

const StartPage = () => {
  return (
    <>
      <Header></Header>
      <div className="flex ">
        <div>
          <StartDash></StartDash>
        </div>
        <div className="bg-[#1E0C34] w-full px-16">
          <Package></Package>
        </div>
      </div>
    </>
  );
};

export default StartPage;
