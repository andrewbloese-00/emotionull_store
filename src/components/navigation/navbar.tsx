import React from "react";
import Link from "next/link";
import Logo from './navlogo'

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-neutral-950 top-0 z-50">
        
          <div className="flex justify-between p-5 items-center h-full">
            <Logo/>
            <ul className="hidden md:flex gap-x-6 text-white text-xl px-5">
              <li className="hover:shadow-lg hover:shadow-black hover:bg-white hover:text-black rounded-lg transition-all p-1 border-none">
                <Link href="/" >
                  <p>Home</p>
                </Link>
              </li>
              <li className="hover:shadow-lg hover:shadow-black hover:bg-white hover:text-black rounded-lg transition-all p-1 border-none">
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li className="hover:shadow-lg hover:shadow-black hover:bg-white hover:text-black rounded-lg transition-all p-1 border-none">
                <Link href="/shop">
                  <p>Shop</p>
                </Link>
              </li>
            </ul>
          </div>
      </div>
    </>
  );
};

export default Navbar;