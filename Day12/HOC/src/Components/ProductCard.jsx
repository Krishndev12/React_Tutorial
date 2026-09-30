// const ProductCard = ({ title, price, img, onSale }) => {
//   return (
//     <div>
//       <div>
//         {onSale && <span className="bg-red-600">Sale</span>}
//         <h2>{title}</h2>
//         <p>{price}</p>
//         <img src={img} alt="" />
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// ⭐⭐⭐⭐⭐⭐⭐⭐
// ––––––––––––––––––––––––––––––––––

const ProductCard = ({ title, price, img }) => {
  return (
    <div>
      <div>
       
        <h2>{title}</h2>
        <p>{price}</p>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ProductCard;
