import React from 'react';
import outdoorGrill from '../images/process-outdoor-grill.png'

const Process = () => (
  <section className="container section7 ">
    <div className="text-center image row">
      <img src={outdoorGrill} alt="" srcset="" className="img-fluid" />
    </div>
    <div className="d-flex flex-row justify-content-around brown-text">
      <h2 className="mt-4">THE PROCESS</h2>
      <div className="d-flex flex-column mt-4">
        <ol>
          <li>Consider your outdoor space & budget.</li>
          <li>Choose a size, Built-in or Freestanding, and options.</li>
          <li>Compare with Kalamazoo's prices</li>
          <li>Save money and begin making memories!</li>
        </ol>
      </div>
    </div>
  </section>
)

export default Process
