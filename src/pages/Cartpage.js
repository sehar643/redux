// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { delItem } from "../redux/action";
// // import { delItem } from "../redux/action";

// const Cartpage = () => {
//   let productsList = useSelector((state) => state.cartReducer.carts);
//   console.log("Cart Page Data ", productsList);

//   let initialQuantities = productsList.map(() => 1);
//   let [quantities, setQuantities] = useState(initialQuantities)

//   let dispatch = useDispatch()

//   const deleteItem = (id) =>{
//        dispatch(delItem(id))
//   }

//   const incQty = (index) =>{
//     const updatedQuantities = [...quantities];
//     // Increase quantity for the item at given index
//     updatedQuantities[index] += 1;
//     // Update the state
//     setQuantities(updatedQuantities);
//   }

//   return (
//     <div>
//       <h1>Shopping Cart Detail Page</h1>
//       <div className="container">

//       <table class="table">
//   <thead>
//     <tr>
      
//       <th scope="col">delete</th>
//       <th scope="col">image</th>
//       <th scope="col">title</th>
//       <th scope="col">price</th>
//       <th scope="col">qty</th>
//       <th scope="col">Total</th>
//     </tr>
//   </thead>
//   <tbody>
    
//         {
//            productsList.map((ele , index)=>{
//                 return(
//                     <tr>      
//                         <td>
//                             <button onClick={()=>deleteItem(ele.id)} className="btn btn-danger btn-sm">x</button>
//                         </td>
//                         <td>
//                             <img src={ele.pic} width={50} />
//                         </td>
//                         <td>{ele.name}</td>
//                         <td>Rs. {ele.price}</td>
//                         <td>
//                             <button onClick={incQty(index)} className="btn btn-dark btn-sm me-2">+</button>
//                             {quantities[index]}
//                             <button className="btn btn-dark btn-sm">-</button>
//                         </td>
//                         <td>
//                             <p className="text-danger fw-bold">Total: {quantities[index] * ele.price}</p>
//                         </td>
//                     </tr>
//                 )
//             })
//         }

//   </tbody>
// </table>

//       </div>

//     </div>
//   );
// };

// export default Cartpage;


// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { delItem } from "../redux/action";

// const Cartpage = () => {
//   let productsList = useSelector((state) => state.cartReducer.carts);
//   console.log("Cart Page Data ", productsList);

//   let initialQuantities = productsList.map(() => 1);
//   let [quantities, setQuantities] = useState(initialQuantities)

//   let dispatch = useDispatch()

//   const deleteItem = (id) =>{
//        dispatch(delItem(id))
//   }

//   const incQty = (index) =>{
//     const updatedQuantities = [...quantities];
//     // Increase quantity for the item at given index
//     updatedQuantities[index] += 1;
//     // Update the state
//     setQuantities(updatedQuantities);
//   }

//   return (
//     <div>
//       <h1>Shopping Cart Detail Page</h1>
//       <div className="container">

//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">delete</th>
//             <th scope="col">image</th>
//             <th scope="col">title</th>
//             <th scope="col">price</th>
//             <th scope="col">qty</th>
//             <th scope="col">Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {productsList.map((ele, index) => {
//             return (
//               <tr key={ele.id}>      
//                 <td>
//                   <button onClick={() => deleteItem(ele.id)} className="btn btn-danger btn-sm">x</button>
//                 </td>
//                 <td>
//                   <img src={ele.pic} width={50} />
//                 </td>
//                 <td>{ele.name}</td>
//                 <td>Rs. {ele.price}</td>
//                 <td>
//                   <button onClick={() => incQty(index)} className="btn btn-dark btn-sm me-2">+</button>
//                   {quantities[index]}
//                   <button className="btn btn-dark btn-sm">-</button>
//                 </td>
//                 <td>
//                   <p className="text-danger fw-bold">Total: {quantities[index] * ele.price}</p>
//                 </td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>

//       </div>

//     </div>
//   );
// };

// export default Cartpage;


// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { delItem } from "../redux/action";

// const Cartpage = () => {
//   let productsList = useSelector((state) => state.cartReducer.carts);
//   console.log("Cart Page Data ", productsList);

//   let initialQuantities = productsList.map(() => 1);
//   let [quantities, setQuantities] = useState(initialQuantities);

//   let dispatch = useDispatch();

//   const deleteItem = (id) =>{
//     dispatch(delItem(id));
//   }

//   const incQty = (index) => {
//     const updatedQuantities = [...quantities];
//     // Increase quantity for the item at given index
//     updatedQuantities[index] += 1;
//     // Update the state
//     setQuantities(updatedQuantities);
//   }

//   const decQty = (index) => {
//     if (quantities[index] > 1) {
//       const updatedQuantities = [...quantities];
//       // Decrease quantity for the item at given index
//       updatedQuantities[index] -= 1;
//       // Update the state
//       setQuantities(updatedQuantities);
//     }
//   }

//   return (
//     <div>
//       <h1>Shopping Cart Detail Page</h1>
//       <div className="container">

//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">delete</th>
//             <th scope="col">image</th>
//             <th scope="col">title</th>
//             <th scope="col">price</th>
//             <th scope="col">qty</th>
//             <th scope="col">Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {productsList.map((ele, index) => {
//             return (
//               <tr key={ele.id}>      
//                 <td>
//                   <button onClick={() => deleteItem(ele.id)} className="btn btn-danger btn-sm">x</button>
//                 </td>
//                 <td>
//                   <img src={ele.pic} width={50} />
//                 </td>
//                 <td>{ele.name}</td>
//                 <td>Rs. {ele.price}</td>
//                 <td>
//                   <button onClick={() => incQty(index)} className="btn btn-dark btn-sm me-2">+</button>
//                   {quantities[index]}
//                   <button onClick={() => decQty(index)} className="btn btn-dark btn-sm">-</button>
//                 </td>
//                 <td>
//                   <p className="text-danger fw-bold">Total: {quantities[index] * ele.price}</p>
//                 </td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>

//       </div>
//     </div>
//   );
// };

// export default Cartpage;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delItem } from "../redux/action";
import { Link } from "react-router-dom";

const Cartpage = () => {
  let productsList = useSelector((state) => state.cartReducer.carts);
  console.log("Cart Page Data ", productsList);

  let initialQuantities = productsList.map(() => 1);
  let [quantities, setQuantities] = useState(initialQuantities);

  let dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(delItem(id));
  }

  const incQty = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);
  }

  const decQty = (index) => {
    if (quantities[index] > 1) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
    }
  }

  return (
    <div>
      <h1>Shopping Cart Detail Page</h1>
      <div className="container">

      {productsList.length === 0 ? (
        <h2 className="text-danger mt-5">Cart is empty</h2>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">delete</th>
              <th scope="col">image</th>
              <th scope="col">title</th>
              <th scope="col">price</th>
              <th scope="col">qty</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {productsList.map((ele, index) => {
              return (
                <tr key={ele.id}>      
                  <td>
                    <button onClick={() => deleteItem(ele.id)} className="btn btn-danger btn-sm">x</button>
                  </td>
                  <td>
                    <img src={ele.pic} width={50} />
                  </td>
                  <td>{ele.name}</td>
                  <td>Rs. {ele.price}</td>
                  <td>
                    <button onClick={() => incQty(index)} className="btn btn-dark btn-sm me-2">+</button>
                    {quantities[index]}
                    <button onClick={() => decQty(index)} className="btn btn-dark btn-sm">-</button>
                  </td>
                  <td>
                    <p className="text-danger fw-bold">Total: {quantities[index] * ele.price}</p>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
      <Link to="/checkout"><button className="btn btn-success my-5">Procecd to Checkout</button></Link>

      </div>
    </div>
  );
};

export default Cartpage;
