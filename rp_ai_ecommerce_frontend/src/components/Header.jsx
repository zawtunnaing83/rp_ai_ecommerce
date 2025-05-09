import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <header className="h-16 shadow-md bg-white fixed w-full z-40">
        <div className="h-full container mx-auto flex items-center px-4 justify-between">
          <div className="">
            <Logo w={90} h={50} />
          </div>
          <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
            <input
              type="text"
              placeholder="search product here..."
              className="w-full outline-none"
            />
            <div className="text-lg min-w-[50px] h-8 bg-gray-600 flex items-center justify-center rounded-r-full text-white">
              <GrSearch />
            </div>
          </div>

          <div className="flex items-center gap-7">
            <div className="relative flex justify-center">
              <div className="text-3xl cursor-pointer">
                <FaRegCircleUser />
              </div>
            </div>

            <Link to={"/cart"} className="text-2xl relative">
              <span>
                <FaShoppingCart />
              </span>

              <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                <p className="text-sm">1</p>
              </div>
            </Link>
            <div>
              <Link
                to={"/login"}
                className="px-3 py-1 rounded-full text-white bg-blue-500 hover:bg-blue-700"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
