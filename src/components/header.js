import React from "react"
import Image from "./image"

const Header = ({ data }) => (
  <header className="py-4 header-element d-flex align-items-center">
    <div className="container">
      <nav className="row">
        <div className="col-12 col-lg-4 mt-4 mt-lg-0 order-2 order-lg-1 d-flex justify-content-center justify-content-lg-end align-items-center">
          <ul className="nav-links text-uppercase d-flex flex-column flex-lg-row justify-content-lg-end m-0 p-0">
            <li className="mx-lg-4 text-center text-lg-left">
              <a href="https://americanmadegrills.com/collections/american-muscle-grill-series">
                Cooking
              </a>
              <div className="hover-accent mt-2"></div>
            </li>
            <li className="mx-lg-4 text-center text-lg-left">
              <a href="https://americanmadegrills.com/collections/storage">
                Storage
              </a>
              <div className="hover-accent mt-2"></div>
            </li>
            <li className="mx-lg-4 text-center text-lg-left">
              <a href="https://americanmadegrills.com/collections/accessories">
                Accessories
              </a>
              <div className="hover-accent mt-2"></div>
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-4 order-1 order-lg-2">
          <a href="https://americanmadegrills.com">
            <Image filename="logo-wordmark.png" alt="American Made Grills" />
          </a>
        </div>
        <div className="col-12 col-lg-4 order-3 d-flex justify-content-center justify-content-lg-start align-items-center">
          <ul className="nav-links text-uppercase d-flex flex-column flex-lg-row m-0 p-0">
            <li className="mx-lg-4 text-center text-lg-left">
              <a href="https://americanmadegrills.com/pages/contact">Help</a>
              <div className="hover-accent mt-2"></div>
            </li>
            <li className="mx-lg-4 text-center text-lg-left">
              <a
                href="https://americanmadegrills.com/search"
                className="d-flex"
              >
                <span className="nav-icon mr-1">
                  <Image filename="icon-search.png" alt="Search" />
                </span>
                Search
              </a>
              <div className="hover-accent mt-2"></div>
            </li>
            <li className="mx-lg-4 text-center text-lg-left">
              <a href="https://americanmadegrills.com/cart" className="d-flex">
                <span className="nav-icon mr-1">
                  <Image filename="icon-cart.png" alt="Cart" />
                </span>
                Cart
              </a>
              <div className="hover-accent mt-2"></div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
)

export default Header
