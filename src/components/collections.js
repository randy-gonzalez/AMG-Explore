import React from "react"
import Image from "./image"

const Collections = () => (
  <section id="collections" className="container py-4">
    <div className="row">
      <div className="collection col-12 col-md-6">
        <a
          href="https://americanmadegrills.com/collections/american-muscle-grill-series/products/36-american-muscle-grill-built-in"
          className="d-flex flex-column justify-content-between h-100"
        >
          <div className="image-container mb-4 d-flex flex-grow-1 align-items-center">
            <span className="sale px-2 py-1">Sale</span>
            <span className="quick-view w-100 text-center py-1">
              Quick View
            </span>
            <div className="collection-image w-100">
              <Image
                filename="product-amg-36.jpg"
                alt='36" Muscle Grill - Built-in'
              />
            </div>
            <div className="collection-alt-image w-100">
              <Image
                filename="product-amg-36-alt.jpg"
                alt='36" Muscle Grill - Built-in'
              />
            </div>
          </div>
          <div className="text-center text-uppercase">
            <p className="product-title">
              36" Muscle Grill - Built-in
            </p>
            <p className="brand text-muted">American Made Grills</p>
            <p>
              <span className="original-price mx-2">$8,750.00</span>
              <span className="mx-2">$7,000.00</span>
              <span className="savings-price mx-2">Save $1,750.00</span>
            </p>
          </div>
        </a>
      </div>
      <div className="collection col-12 col-md-6">
        <a
          href="https://americanmadegrills.com/collections/american-muscle-grill-series/products/54-american-muscle-grill-built-in"
          className="d-flex flex-column justify-content-between h-100"
        >
          <div className="image-container mb-4 d-flex flex-grow-1 align-items-center">
            <span className="sale px-2 py-1">Sale</span>
            <span className="quick-view w-100 text-center py-1">
              Quick View
            </span>
            <div className="collection-image w-100">
              <Image
                filename="product-amg-54.jpg"
                alt='54" Muscle Grill - Built-in'
              />
            </div>
            <div className="collection-alt-image w-100">
              <Image
                filename="product-amg-54-alt.jpg"
                alt='54" Muscle Grill - Built-in'
              />
            </div>
          </div>
          <div className="text-center text-uppercase">
            <p className="product-title">
              54" Muscle Grill - Built-in
            </p>
            <p className="brand text-muted">American Made Grills</p>
            <p>
              <span className="original-price mx-2">$12,150.00</span>
              <span className="mx-2">$9,700.00</span>
              <span className="savings-price mx-2">Save $2,450.00</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
)

export default Collections
