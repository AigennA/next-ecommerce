'use client'

import Image from "next/image"
import { useState } from "react"
import Link from "next/link";
import About from "../app/about/page";

const Menu = () => {

    const [open,setOpen] = useState(false)


    return(
        <div className="">
            <Image src="/menu.png"
            alt="" 
            width={28} 
            height={28} 
            className="cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
            />
                {open && (
                    <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                        <Link href="/">HomePage</Link>
                        <Link href="/">Shop</Link>
                        <Link href="/">Deals</Link>
                        <Link href="/about">About</Link>
                       
                        <Link href="/contact">Contact</Link>
                        <Link href="/">Logout</Link>
                        <Link href="/giftcard">Gift Card</Link>   
                   </div>
                )}
              </div>       
    );
};

export default Menu;