import React from "react"
import Image from "./image"
import { useForm } from "react-hook-form";
import addToMailchimp from 'gatsby-plugin-mailchimp';

const PictureForm = ({ image, primaryText, secondaryText, buttonText }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => { addToMailchimp(data.email); console.log(data.email) }
  return (
    <div className="picture-form-container">
      <div className="image">
        <Image filename={image} alt="" />
      </div>
      <div className="container mt-5 mx-md-5">
        <div className="row">
          <div className="form text-center col-12 col-md-6 col-lg-4 p-4">
            <p className="title text-uppercase">{primaryText}</p>
            <p className="description">{secondaryText}</p>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-100"
                ref={register}
              />
              <button className="text-uppercase">Subscribe</button>
            </form>
          </div>
          <div className="spacer col-12"></div>
        </div>
      </div>
    </div>
  )
}

export default PictureForm
