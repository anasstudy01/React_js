import React from "react";
import { assets } from "../../assets/assets.js";
import { Link, useLocation } from "react-router-dom";
import { useClerk,UserButton,useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const location = useLocation();
  const isCourseListpage = location.pathname.includes("course-list");


  const {openSignIn} = useClerk();
  const {user} = useUser();

  return (
    <div
      className={`flex justify-between items-center bg-white px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 shadow-md ${
        isCourseListpage ? "bg-white" : "bg-cyan-100/80"
      }`}
    >
      <img
        src={assets.logo}
        alt="Navbar Image"
        className="w-28 lg:w-32 cursor-pointer"
      />

      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-4">
        {user && <>
          <button className="hover:text-blue-500 transition-colors">
            Become Educator
          </button>
          <Link
            to="/my-enrollments"
            className="hover:text-blue-500 transition-colors"
          >
            My Enrollments
          </Link> 
          </>}
        </div>
        {user ? <UserButton /> :
          <button
            onClick={() => openSignIn()}
            className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Create Account
          </button>}
      </div>
      {/* for phone screen  */}
      <div className="md:hidden flex item-center gap-2 sm:gap-5 text-gray-500">
        <div>
          {user && <>

          <button className="hover:text-blue-500 transition-colors">
            Become Educator | 
          </button>
          <Link
            to="/my-enrollments"
            className="hover:text-blue-500 transition-colors"
          >
          |   My Enrollments
          </Link>
          </>
          }

        </div>
       { user ? <UserButton /> : <button><img src={assets.user_icon}
alt="User Icon"  
onClick={() => openSignIn() }

className="w-8 h-8 rounded-full"
        /></button>}
      </div>
    </div>
  );
};

export default Navbar;
