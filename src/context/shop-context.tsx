// import React, { createContext, useState } from "react";

// type ShopContextType = {
//     children: React.ReactNode;
// }

// type AddToCartProps = {
//   id: string;
//   brand: string;
//   name: string;
//   price: number;
//   image: string;
// }

// const ShopContext = createContext(null);

// export default function ShopContextProvider({children}: ShopContextType) {
//     const [cartItems, setCartItems] = useState<[]>([]);

//     const addToCart = ({id, brand, price, image}: AddToCartProps) => {
//       setCartItems((currItems) => {
//               if (currItems.find((item) => item.id === id) == null) {
//                 localStorage.setItem(
//                   "item",
//                   JSON.stringify([
//                     ...currItems,
//                     { id, image, brand, price, quantity: 1 },
//                   ])
//                 );
//                 return [...currItems, { id, image, brand, price, quantity: 1 }];
//               } else {
//                 return currItems.map((item) => {
//                   if (item.id === id) {
//                     return { ...item, quantity: item.quantity + 1 };
//                   } else {
//                     return item;
//                   }
//                 });
//               }
//             });
//     }

//     // const addToCart = (id:number, title:string, price:number, image:string) => {
//     //     setCartItems((currItems) => {
//     //       if (currItems.find((item) => item.id === id) == null) {
//     //         localStorage.setItem(
//     //           "item",
//     //           JSON.stringify([
//     //             ...currItems,
//     //             { id, image, title, price, quantity: 1 },
//     //           ])
//     //         );
//     //         return [...currItems, { id, image, title, price, quantity: 1 }];
//     //       } else {
//     //         return currItems.map((item) => {
//     //           if (item.id === id) {
//     //             return { ...item, quantity: item.quantity + 1 };
//     //           } else {
//     //             return item;
//     //           }
//     //         });
//     //       }
//     //     });
//     //   };
// }