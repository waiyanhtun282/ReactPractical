type productType = {
    id:number;
    name:string;
    price:number;
    image?:string;
}
const ProductsCard = ({id,name,price,image}: productType) => {
  return (
    <div>
       <div>{id}</div>
       <div>{name}</div>
       <div>{price}</div>
       <img  src={image} alt={name}/>
    </div>
  )
}

export default ProductsCard