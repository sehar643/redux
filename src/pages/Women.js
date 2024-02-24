import React from 'react'
import womendata from '../data/womendata';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';

const Women = () => {

let dispatch = useDispatch()

  const sendProduct = (x) =>{
    // console.log(x)

    dispatch(addCart(x))

  }


  return (
    <>
      {/* <h1>women data</h1> */}
      <div className="container">
        <div className="row">
          {womendata.map((ele) => {
          return (
            <div className="col-lg-3 col-md-6 col-12 my-3">
              <div className="card" style={{ width: "16rem" }}>
                <img src={ele.pic} width={170} height={260} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <p className="card-text">
                  PKR Rs. {ele.price} /-
                  </p>
                  <button onClick={()=>sendProduct(ele)} href="#" className="btn btn-dark">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </>
  )
}

export default Women
