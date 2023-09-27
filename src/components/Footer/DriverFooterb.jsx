import React from "react";
import { FaCogs, FaEnvelopeOpenText, FaHome, FaTasks } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import home from "../../assets/home2.png";
import home2 from "../../assets/homeg.png";
import message from "../../assets/inbox.png";
import message2 from "../../assets/inboxg.png";
import more from "../../assets/more2.png";
import more2 from "../../assets/moreg.png";
import setting from "../../assets/setting2.png";
import setting2 from "../../assets/settingg.png";
import plus from "../../assets/plus.png";

const DriverFooterb = () => {
  return (
    <footer className="bg-white fixed px-2 w-full bottom-0 text-white py-1">
      <div className="container mx-auto flex justify-around pt-2">
        <div className="flex flex-col items-center">
          <NavLink to="/dashboardb">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <>
                    <div className="flex flex-col items-center">
                      <img className="w-7" src={home2} alt="" />
                      <span className="uppercase pt-1 text-sm text-[#04A83F]">
                        হোম
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-center">
                      <img className="w-7" src={home} alt="" />
                      <span className="uppercase pt-1 text-sm text-[#A0B1C6]">
                        হোম
                      </span>
                    </div>
                  </>
                )}
              </>
            )}
          </NavLink>
        </div>
        <NavLink to="">
          {({ isActive }) => (
            <>
              {isActive ? (
                <>
                  <div className="flex flex-col items-center">
                    <img className="w-7" src={message2} alt="" />
                    <span className="uppercase pt-1 text-sm text-[#04A83F]">
                      ইনবক্স
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center">
                    <img className="w-7" src={message} alt="" />
                    <span className="uppercase pt-1 text-sm text-[#A0B1C6]">
                      ইনবক্স
                    </span>
                  </div>
                </>
              )}
            </>
          )}
        </NavLink>

        <Link to="/dashboardb">
          <div className="flex flex-col items-center mt-[-40px]">
            <img className="w-[70px]" src={plus} alt="" />
          </div>
        </Link>
        <NavLink to="/driverSettingb">
          {({ isActive }) => (
            <>
              {isActive ? (
                <>
                  <div className="flex flex-col items-center">
                    <img className="w-7 " src={setting2} alt="" />
                    <span className="uppercase pt-1 text-sm text-[#04A83F]"></span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center">
                    <img className="w-7 " src={setting} alt="" />
                    <span className="uppercase pt-1 text-sm text-[#A0B1C6]">
                      সেটিং
                    </span>
                  </div>
                </>
              )}
            </>
          )}
        </NavLink>
        <NavLink to="/driverMoreb">
          {({ isActive }) => (
            <>
              {isActive ? (
                <>
                  <div className="flex flex-col items-center">
                    <img className="w-7 " src={more2} alt="" />
                    <span className="uppercase pt-1 text-sm text-[#04A83F]">
                      আরো
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center">
                    <img className="w-7 " src={more} alt="" />
                    <span className="uppercase pt-1 text-sm text-[#A0B1C6]">
                      আরো
                    </span>
                  </div>
                </>
              )}
            </>
          )}
        </NavLink>
      </div>
    </footer>
  );
};

export default DriverFooterb;