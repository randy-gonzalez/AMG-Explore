import React from "react"
import Image from "./image"
import { useForm } from "react-hook-form";
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';

const PictureForm = ({ image, primaryText, secondaryText, buttonText }) => {
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);

  const onSubmit = data => {
    const form = document.querySelector('.emailForm');
    form.value = "";
    addToMailchimp(data.email);
    setShow(true);
    console.log(data.email)
  }
  return (
    <div className="picture-form-container">
      <div className="image">
        <Image filename={image} alt="" />
      </div>
      <div className="container mt-5 mx-md-5">
        <div className="row">
          <div className="form text-center col-12 col-lg-6 col-lg-4 p-4">
            <p className="title text-uppercase">{primaryText}</p>
            <p className="description">{secondaryText}</p>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-100 emailForm"
                ref={register}
              />
              <button className="text-uppercase">Subscribe</button>
            </form>
          </div>

          <div className="spacer col-12"></div>
        </div>
      </div>
      <Alert variant="success" className={`  ${show ? '' : 'd-none'} success-message`} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Thank you for Subcribing!</Alert.Heading>
        <p>
          Please check your email for the next step.
        </p>
      </Alert>
    </div>



  )
}

export default PictureForm
