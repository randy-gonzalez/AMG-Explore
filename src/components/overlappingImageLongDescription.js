import React from 'react';
import grillingSteaks from '../images/AMG-54-Father-Mother-Son-Steaks-Grilling-Lifestyle.png';
import steaks from '../images/steaks.png';
const OverlappingImageLongDescription = () => (
  <section className="container section8 p-5">
    <div className="d-flex flex-row justify-content-around long-container">
      <div className="d-flex flex-column col-6 brown-text">
        <p>DON'T OVERSPEND ON A KALAMAZOO.


        BEGIN YOUR OUTDOOR EXPERIENCE
        WITH THE AMERICAN MUSCLE GRILL
          FROM SUMMERSET GRILLS</p>
        <div className=" d-flex section8-img-container">
          <img src={grillingSteaks} className="section8-img-1 " />
          <img src={steaks} className="section8-img-2 " />

        </div>
      </div>

      <div className="d-flex flex-column col-6 description-text">
        <p>With over 20 years of experience designing and supplying
        quality stainless grills, we are passionate about providing
        the best outdoor cooking experience possible. As the
        industry expands and evolves through technology and
        innovation, we strive for excellence by continually
        experimenting with grills, features, cooking techniques, and
          recipes.</p>

        <p>From the beginning, we have dreamt about a barbecue grill
        solution that combines all of the most popular and desired
        fuels under one hood. Imagine the possibility of searing
        over lump coal, sautéing over a controlled gas flame, while
        smoking simultaneously with mesquite wood-chips, and
        still having room to spare. The American Muscle Grill is that
          solution at a fraction of the price of Kalamazoo.</p>

        <p>The American Muscle Grill is all about sturdy, high-quality
        stainless steel construction, ridiculously high BTU output,
        anrse fuel sources. Whether on a freestanding cart or
        as the built-in centerpiece of an outdoor kitchen, this
        fantastic appliance will be the envy all. There has never
        been a grill like it, nor has there ever been a cooking
          experience available to match.</p>

        <p>The new 36” American Muscle Grill delivers in design and
        function, unlike any other grill available. The stylish front
        end is borrowed from the 1969 Shelby GT 350 Mustang with
        front panel LED lights. Five 22,000 BTU burners and fully
        lighted interiors make managing your cookout a delight.
        Easy-start flamethrower valves, with backup manual
        lighting tubes, make starting your gas, coal, or wood
        sources so easy and efficient that using solid fuels will no
        longer be a hassle. For an even more massive workload, the
        54" model is capable of a full pork rotisserie, while still
        efficient enough to quickly grill a burger or two. The
        possibilities are endless, whether using coals, wood, gas, or
          all three instantaneously.</p>


      </div>
    </div>
  </section>
)

export default OverlappingImageLongDescription
