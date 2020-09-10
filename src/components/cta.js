import React from "react"

const Cta = ({ primaryText, secondaryText, buttonText, buttonAddress }) => (
  <div className="cta-background py-5">
    <div className="container">
      <div className="row text-center">
        <div className="col-12">
          <p className="primary-text text-uppercase">{primaryText}</p>
        </div>
        <div className="col-12">
          <p className="secondary-text">{secondaryText}</p>
        </div>
        <div className="col-12">
          <a href={buttonAddress}>
            <button className="py-2 px-3 text-uppercase">{buttonText}</button>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Cta
