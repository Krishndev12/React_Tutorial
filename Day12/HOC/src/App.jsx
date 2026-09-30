// import ProductCard from "./Components/ProductCard";

// const App = () => {
//   const products = [
//     {
//       id: 1,
//       title: "Wireless Headphones",
//       price: 2499,
//       discountPercentage: 20,
//       onSale: true,
//       rating: 4.5,
//       category: "Electronics",
//       image:
//         "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
//     },
//     {
//       id: 2,
//       title: "Smartphone",
//       price: 29999,
//       discountPercentage: 15,
//       onSale: true,
//       rating: 4.7,
//       category: "Electronics",
//       image:
//         "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
//     },
//     {
//       id: 3,
//       title: "Men's Casual Shirt",
//       price: 1499,
//       discountPercentage: 10,
//       onSale: true,
//       rating: 4.2,
//       category: "Fashion",
//       image:
//         "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
//     },
//     {
//       id: 4,
//       title: "Women's Handbag",
//       price: 1899,
//       discountPercentage: 0,
//       onSale: false,
//       rating: 4.4,
//       category: "Fashion",
//       image:
//         "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
//     },
//     {
//       id: 5,
//       title: "Running Shoes",
//       price: 3299,
//       discountPercentage: 25,
//       onSale: true,
//       rating: 4.6,
//       category: "Footwear",
//       image:
//         "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",
//     },
//     {
//       id: 6,
//       title: "Luxury Perfume",
//       price: 4999,
//       discountPercentage: 30,
//       onSale: true,
//       rating: 4.8,
//       category: "Beauty",
//       image:
//         "https://images.unsplash.com/photo-1789969020360-6dce4b406499?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       id: 7,
//       title: "Gaming Laptop",
//       price: 74999,
//       discountPercentage: 12,
//       onSale: true,
//       rating: 4.7,
//       category: "Electronics",
//       image:
//         "https://plus.unsplash.com/premium_photo-1789652751182-f4af07e03ee3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       id: 8,
//       title: "Classic Watch",
//       price: 3999,
//       discountPercentage: 0,
//       onSale: false,
//       rating: 4.3,
//       category: "Accessories",
//       image:
//         "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp",
//     },
//     {
//       id: 9,
//       title: "Sunglasses",
//       price: 1299,
//       discountPercentage: 18,
//       onSale: true,
//       rating: 4.1,
//       category: "Accessories",
//       image:
//         "https://images.unsplash.com/photo-1789682011909-b81d41bd5d2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       id: 10,
//       title: "Modern Sofa",
//       price: 24999,
//       discountPercentage: 20,
//       onSale: true,
//       rating: 4.5,
//       category: "Furniture",
//       image:
//         "https://images.unsplash.com/photo-1789540515476-95d2a4ae73ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];

//   return (
//     <div>
//       <div className="grid grid-cols-4 gap-4 border border-amber-950">
//         {products.map((item) => {
//           return (
//             <ProductCard
//               title={item.title}
//               price={item.price}
//               img={item.image}
//               onSale={item.onSale}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;

// –––––––––––––––––––––––––––––––––––––––

import ProductCard from "./Components/ProductCard";
import SaleWrapper from "./Components/SaleWrapper";

const App = () => {
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 2499,
      discountPercentage: 20,
      onSale: true,
      rating: 4.5,
      category: "Electronics",
      image:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    },
    {
      id: 2,
      title: "Smartphone",
      price: 29999,
      discountPercentage: 15,
      onSale: true,
      rating: 4.7,
      category: "Electronics",
      image:
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
    },
    {
      id: 3,
      title: "Men's Casual Shirt",
      price: 1499,
      discountPercentage: 10,
      onSale: true,
      rating: 4.2,
      category: "Fashion",
      image:
        "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
    },
    {
      id: 4,
      title: "Women's Handbag",
      price: 1899,
      discountPercentage: 0,
      onSale: false,
      rating: 4.4,
      category: "Fashion",
      image:
        "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
    },
    {
      id: 5,
      title: "Running Shoes",
      price: 3299,
      discountPercentage: 25,
      onSale: true,
      rating: 4.6,
      category: "Footwear",
      image:
        "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",
    },
    {
      id: 6,
      title: "Luxury Perfume",
      price: 4999,
      discountPercentage: 30,
      onSale: true,
      rating: 4.8,
      category: "Beauty",
      image:
        "https://images.unsplash.com/photo-1789969020360-6dce4b406499?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      title: "Gaming Laptop",
      price: 74999,
      discountPercentage: 12,
      onSale: true,
      rating: 4.7,
      category: "Electronics",
      image:
        "https://plus.unsplash.com/premium_photo-1789652751182-f4af07e03ee3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      title: "Classic Watch",
      price: 3999,
      discountPercentage: 0,
      onSale: false,
      rating: 4.3,
      category: "Accessories",
      image:
        "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp",
    },
    {
      id: 9,
      title: "Sunglasses",
      price: 1299,
      discountPercentage: 18,
      onSale: true,
      rating: 4.1,
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1789682011909-b81d41bd5d2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      title: "Modern Sofa",
      price: 24999,
      discountPercentage: 20,
      onSale: true,
      rating: 4.5,
      category: "Furniture",
      image:
        "https://images.unsplash.com/photo-1789540515476-95d2a4ae73ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 border border-amber-950">
        {products.map((item) => {
          if (item.onSale) {
            return (
              <SaleWrapper>
                <ProductCard
                  title={item.title}
                  price={item.price}
                  img={item.image}
                  onSale={item.onSale}
                />
              </SaleWrapper>
            );
          }
          return (
            <ProductCard
              title={item.title}
              price={item.price}
              img={item.image}
              onSale={item.onSale}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
