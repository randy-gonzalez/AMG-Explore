import React from "react"

const TextBox = ({ primaryText, secondaryText }) => (
  <div className="container my-5">
    <div className="row text-center">
      <div className="text-box-background py-4 col-12 col-md-6 offset-md-3">
        <p className="text-box-title text-uppercase">{primaryText}</p>
        <p className="text-box-content m-0">{secondaryText}</p>
      </div>
    </div>
  </div>
)

export default TextBox
