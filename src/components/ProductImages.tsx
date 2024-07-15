"use client"
import Image from "next/image"
import { useState } from "react";

/*const images = [
    {id: 1,
         url:"https://images.pexels.com/photos/5420592/pexels-photo-5420592.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {id: 2,
            url:"https://images.pexels.com/photos/7032143/pexels-photo-7032143.jpeg?auto=compress&cs=tinysrgb&w=600",
           },
           {id: 3,
            url:"https://images.pexels.com/photos/4888825/pexels-photo-4888825.jpeg?auto=compress&cs=tinysrgb&w=600",
           },
           {id: 4,
            url:"https://images.pexels.com/photos/10853711/pexels-photo-10853711.jpeg?auto=compress&cs=tinysrgb&w=600",
           },
         ];*/

const ProductImages = ({items} : { items: any }) => {

    const [index,setIndex] = useState(0)

    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image
                src={items[index].image?.url}
                alt=""
                fill
                sizes="50vx"
                className="object-cover rounded-md"  />
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {items.map((item:any, i:number) => (
                <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" 
                key={item._id} 
                onClick={()=> 
                setIndex(i)}
                >
    <Image 
    src={item.image?.url}
    alt=""
    fill 
    sizes="30vw"
    className="object-coevr rounded-md"
    />
    </div>
     ))}
     </div>
        </div>       
    );
};

export default ProductImages;