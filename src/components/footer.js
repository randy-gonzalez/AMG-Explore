import React from "react"
import Image from "./image"

const Footer = () => (
  <footer className="py-4">
    <div className="container">
      <div className="row">
        <div className="px-5 col-12 col-md-6 col-lg-2">
          <a href="https://americanmadegrills.com">
            <Image filename="logo.png" alt="American Made Grills" />
          </a>
        </div>
        <nav className="my-4 my-lg-0 col-12 col-md-6 col-lg-2">
          <ul className="nav-links m-0 p-0 text-center text-md-left">
            <li className="my-2">
              <a href="https://americanmadegrills.com/collections/american-muscle-grill-series">
                Cooking
              </a>
            </li>
            <li className="my-2">
              <a href="https://americanmadegrills.com/collections/summerset-components">
                Storage
              </a>
            </li>
            <li className="my-2">
              <a href="https://americanmadegrills.com/collections/accessories">
                Accessories
              </a>
            </li>
            <li className="my-2">
              <a href="https://americanmadegrills.com/collections/grill-covers">
                Grill Covers
              </a>
            </li>
          </ul>
        </nav>
        <address className="address my-4 my-lg-0 col-12 col-md-6 col-lg-4">
          <p className="footer-heading text-uppercase">American Made Grills</p>
          <p>
            17322 Gothard St
            <br />
            Huntington Beach, CA 92647
          </p>
          <p>
            <a href="tel:+18009668126">(800) 966-8126</a>
          </p>
          <p>M-F 8:30 am - 5:00 pm (PST)</p>
        </address>
        <div className="my-4 my-lg-0 col-12 col-md-6 col-lg-4">
          <p className="footer-heading text-uppercase">Sign Up and Save</p>
          <p>
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
          <form action="" className="d-flex">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-100"
            />
            <button>Subscribe</button>
          </form>
          <div className="social-links d-flex mt-4">
            <a
              href="https://www.instagram.com/americanmadegrills"
              target="_blank"
              rel="noreferrer"
              className="mr-4"
            >
              <Image
                filename="link-instagram.png"
                alt="American Made Grills on Instagram"
              />
            </a>
            {/* <a href="/" target="_blank" rel="noreferrer" className="mr-4">
              <Image
                filename="link-facebook.png"
                alt="American Made Grills on Facebook"
              />
            </a>
            <a href="/" target="_blank" rel="noreferrer" className="mr-4">
              <Image
                filename="link-pinterest.png"
                alt="American Made Grills on Pinterest"
              />
            </a> */}
          </div>
        </div>
        <div className=" mt-4 col-12 text-center">
          <small>&copy; 2020 American Made Grills</small>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
