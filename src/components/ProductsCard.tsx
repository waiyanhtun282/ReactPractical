import { useState } from "react";

type productType = {
  name: string;
  price: number;
  image?: string;
};
const ProductsCard = ({ name, price, image }: productType) => {
  const  [imageLoaded,setImageLoaded] =useState(false);
  const handleImageLoad = () =>{
    setImageLoaded(true)
  };
  return (
    <div className=" shadow-lg rounded-lg bg-white p-4">
      <div className=" relative h-48 w-full">
  {
    !imageLoaded && (
      <div className="absolute rounded-md inset-0 bg-gray-200 animate-pulse">

      </div>
    )
  }
        <img src={image}
         alt={name} 
        className={`w-full h-full  rounded-md object-contain transition-opacity duration-300 ${imageLoaded ? "opacity-100 ": "opacity-0"}`} 
        onLoad={handleImageLoad}
        />
      </div>
      <div className=" flex justify-between mt-2">
        <div >
          <h2 className=" text-lg font-bold">{name}</h2>
            <p>${price}</p>
        </div>
        <button className=" bg-sky-500  text-white px-4 py-2 rounded-md hover:bg-sky-600">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductsCard;
