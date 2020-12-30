import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const FeatureByFeatureComparison = () => (
  <section className="container section5 text-light p-4">
    <div className="d-flex flex-column ">
      <strong className="mt-3">THE GUIDE</strong>
      <h2 className=" mt-3">A feature by feature comparison with Kalamazoo shows <span className="d-block">the Muscle Grill is the one grill you need.</span></h2>
    </div>

    <table class="table text-light mt-5">
      <thead>
        <tr>

          <th scope="col">FEATURES</th>
          <th scope="col"><span className='d-block'>AMERICAN</span> MUSCLE GRILL</th>
          <th scope="col"><span className='d-block'>KALAMAZOO</span> HYBRID FIRE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">MODEL</th>
          <td>AMG36</td>
          <td>K750HB</td>
        </tr>
        <tr>
          <th scope="row">PRICE</th>
          <td><FontAwesomeIcon icon={faCheckCircle} size="1x" /> $6,999</td>
          <td>$17,995</td>
        </tr>
        <tr>
          <th scope="row">MATERIAL</th>
          <td>304 STAINLESS</td>
          <td>304 STAINLESS</td>
        </tr>
        <tr>
          <th scope="row">COOKING SURFACE SQ IN</th>
          <td><FontAwesomeIcon icon={faCheckCircle} size="1x" /> 1105 sq in</td>
          <td>726 sq in</td>
        </tr>
        <tr>
          <th scope="row">BURNERS</th>
          <td><FontAwesomeIcon icon={faCheckCircle} size="1x" /> FIVE</td>
          <td>THREE</td>
        </tr>
        <tr>
          <th scope="row">BURNER TYPE</th>
          <td><FontAwesomeIcon icon={faCheckCircle} size="1x" /> 14-GAGUE 304 STAINLESS STEEL</td>
          <td>CAST BRONZE</td>
        </tr>
        <tr>
          <th scope="row">BTU PER BURNER</th>
          <td>22,000</td>
          <td><FontAwesomeIcon icon={faCheckCircle} size="1x" /> 25,000</td>
        </tr>
        <tr>
          <th scope="row">IGNITION</th>
          <td><FontAwesomeIcon icon={faCheckCircle} size="1x" /> SOLID BRASS, FLAME THROWER VALVE</td>
          <td>EHSI</td>
        </tr>
        <tr>
          <th scope="row">LIGHTING</th>
          <td><FontAwesomeIcon icon={faCheckCircle} size="1x" /> CONTROL PANEL & INTERIOR LIGHTING</td>
          <td>CONTROL PANEL</td>
        </tr>


      </tbody>
    </table>

  </section >
)
export default FeatureByFeatureComparison



  // < div className = "d-flex flex-row justify-content-around" >
  //     <div className="d-flex flex-column">
  //       <p className="text-center mt-5 font-weight-bold">FEATURES</p>
  //       <ul className="list">


  //         <li className="mt-2 ">MODEL</li>
  //         <li >PRICE</li>
  //         <li >MATERIAL</li>
  //         <li >COOKING SURFACE SQ IN</li>
  //         <li >BURNERS</li>
  //         <li >BURNER TYPE</li>
  //         <li >BTU PER BURNER</li>
  //         <li >IGNITION</li>
  //         <li >LIGHTING</li>
  //       </ul>
  //     </div>
  //     <div className="d-flex flex-column">
  //       <p className="text-center mt-5 font-weight-bold">Muscle Grill</p>
  //       <ul className="list">


  //         <li className="mt-2 ">AMG36</li>
  //         <li >$6999.99</li>
  //         <li >304 STAINLESS</li>
  //         <li >1105</li>
  //         <li >FIVE</li>
  //         <li >14-GAGUE 304 STAINLESS STEEL</li>
  //         <li >22,000</li>
  //         <li >SOLID BRASS, FLAME THROWER VALVE</li>
  //         <li >CONTROL PANEL & INTERIOR LIGHTING</li>
  //       </ul>
  //     </div>
  //     <div className="d-flex flex-column">
  //       <p className="text-center mt-5 font-weight-bold">KALAMAZOO</p>
  //       <ul className="list">
  //         <li className="mt-2 ">K750HB</li>
  //         <li >$17,995.00</li>
  //         <li >304 STAINLESS</li>
  //         <li >726 sq in</li>
  //         <li >THREE</li>
  //         <li >CAST BRONZE</li>
  //         <li >25,000</li>
  //         <li >EHSI</li>
  //         <li >CONTROL PANEL</li>
  //       </ul>
  //     </div>
  //   </div >
