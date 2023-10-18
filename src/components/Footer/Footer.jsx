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
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Footer = () => {
  const { user } = useContext(AuthContext);
  // const [newMessageCount, setNewMessageCount] = useState(2);
  const [messages, setMessages] = useState(0);
  useEffect(() => {
    // Fetch messages from the database when the component mounts
    const fetchMessagesFromDatabase = async () => {
      try {
        const response = await fetch(
          "https://nirapode-server.vercel.app/message"
        );
        if (response.ok) {
          const data = await response.json();

          // Filter messages for user.email and admin senders
          const filteredMessages = data.filter(
            (message) =>
              message.targetEmail === "all" && message.status === "unseen"
          );

          setMessages(filteredMessages?.length);
        }
      } catch (error) {
        console.error("Error fetching messages from the database:", error);
      }
    };

    fetchMessagesFromDatabase(); // Call the function to fetch messages
  }, [user, messages]);

  return (
    <footer className="bg-white fixed px-2 w-full bottom-0 text-white py-1">
      <div className="container mx-auto flex justify-around pt-2">
        <div className="flex flex-col items-center">
          <NavLink to="/location">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <>
                    <div className="flex flex-col items-center">
                      <img className="w-7" src={home2} alt="" />
                      <span className="uppercase pt-1 text-sm text-[#04A83F]">
                        Home
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-center">
                      <img className="w-7" src={home} alt="" />
                      <span className="uppercase pt-1 text-sm text-[#A0B1C6]">
                        Home
                      </span>
                    </div>
                  </>
                )}
              </>
            )}
          </NavLink>
        </div>
        <NavLink to="/message">
          {({ isActive }) => (
            <>
              {isActive ? (
                <>
                  <div className="flex flex-col items-center">
                    <img className="w-7" src={message2} alt="" />
                    <span className="uppercase relative pt-1 text-sm text-[#04A83F]">
                      Inbox
                    </span>
                    {messages > 0 && (
                      <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute -top-2">
                        {messages}
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center">
                    <img className="w-7" src={message} alt="" />
                    <span className="uppercase relative pt-1 text-sm text-[#A0B1C6]">
                      Inbox
                    </span>
                    {messages > 0 && (
                      <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute -top-2">
                        {messages}
                      </span>
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </NavLink>

        <Link to="/location">
          <div className="flex flex-col items-center mt-[-40px]">
            <img className="w-[70px]" src={plus} alt="" />
          </div>
        </Link>
        <NavLink to="/setting">
          {({ isActive }) => (
            <>
              {isActive ? (
                <>
                  <div className="flex flex-col items-center">
                    <img className="w-7 " src={setting2} alt="" />
                    <span className="uppercase pt-1 text-sm text-[#04A83F]">
                      Setting
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center">
                    <img className="w-7 " src={setting} alt="" />
                    <span className="uppercase pt-1 text-sm text-[#A0B1C6]">
                      Setting
                    </span>
                  </div>
                </>
              )}
            </>
          )}
        </NavLink>
        <NavLink to="/more">
          {({ isActive }) => (
            <>
              {isActive ? (
                <>
                  <div className="flex flex-col items-center">
                    <img className="w-7 " src={more2} alt="" />
                    <span className="uppercase pt-1 text-sm text-[#04A83F]">
                      More
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center">
                    <img className="w-7 " src={more} alt="" />
                    <span className="uppercase pt-1 text-sm text-[#A0B1C6]">
                      More
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

export default Footer;
