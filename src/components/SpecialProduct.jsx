import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
      <div className="d-flex justify-content-between">
          <div className="">
            <Link to="/product/:id">
              <img src="images/images/watch.jpg" className='img-fluid' alt="watch" />
            </Link>
          </div>
          <div className="special-product-content">
            <Link to="product/:id" className='text-dark'>
              <h5 className="brand">Havels</h5>
              <h6 className="title">Samsum Galxy s10</h6>
            </Link>
            <ReactStars 
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor='#ffd700'
                />
                <p className="price">
                  <span className="red-p">$100</span> &nbsp;
                  <strike>$100</strike>
                </p>
                <div className="discount-till d-flex align-items-center gap-10">
                  <p className='mb-0'>
                    <b>5 </ b>da0ys
                  </p>
                  <div className="d-flex gap-10 align-items-center">
                    <span className="badge rounded-circle p-2 bg-danger">1</span> : 
                    <span className="badge rounded-circle p-2 bg-danger">1</span> :
                    <span className="badge rounded-circle p-2 bg-danger">1</span>
                    <span className="badge rounded-circle p-2 bg-danger">1</span>
                  </div>
                </div>
              <div className="prod-count my-3">
                <p>Products : 5</p>
                <div className="progress">
                  <div
                    className='progress-bar'
                    role="progressbar"
                    style={{width:"25%"}}
                    aria-valuemax="100"
                    aria-valuenow="25"
                    aria-aria-valuemin="0"    
                  ></div>
                </div>
              </div>
              <Link to="cart" className='button'>Add to Cart</Link>
          </div>
          </div>
      </div>
    </div>
  )
}

export default SpecialProduct
