import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Dropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline :{" "}
                <a href="tel:+91 9566019398" className="text-white">
                  +91 9566019398
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">Digitic.</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here...."
                  aria-label="Search Product Here...."
                  aria-aria-describedby="Search Product Here...."
                />
                <span className="input-group-text P-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to='/compre-products' className="d-flex aligin-items-center gap-10 text-white">
                    <img src="\images\images\compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className="d-flex aligin-items-center gap-10 text-white">
                    <img src="/images/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favorite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/login' className="d-flex aligin-items-center gap-10 text-white">
                    <img src="/images/images/user.svg" alt="user" />
                    <p className="mb-0">
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="cart" className="d-flex aligin-items-center gap-10 text-white">
                    <img src="/images/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 5000</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex aligin-items-center">
                <div></div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-30">
                    <div>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" className="bg-transparent border-0 gap-15 d-flex align-items-center">
                        <img src="images/images/menu.svg" alt="" />
                        <span className="me-5 d-inline-block">
                          Show Categories
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropmenu">
                        <Dropdown.Item className="dropdown-item text-white" href="#/action-1">Action 1</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item text-white" href="#/action-2">Action 2</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/blog">Blogs</NavLink>
                    <NavLink to="/contact">Contacts</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
