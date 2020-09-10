import React from "react"

const Text = ({ text }) => (
  <div className="py-5 text-background">
    <div className="container">
      <div className="row">
        <p className="text-content col-12 text-center m-0">{text}</p>
      </div>
    </div>
  </div>
)

export default Text
