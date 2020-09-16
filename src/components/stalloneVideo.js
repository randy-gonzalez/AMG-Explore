import React from 'react';
import { useState } from 'react';

{/* <div className={`modal ${toggleClass ? 'active' : 'inactive'}`} tabindex="-1" role="dialog"></div> */ }
const StalloneVideo = () => {
  const [toggleClass, setToggleClass] = useState(false);
  function toggle() {
    const element = document.getElementById('videoModal')

    if (toggleClass) {
      setToggleClass(false)
    }

    if (!toggleClass) {
      setToggleClass(true)
    }
  }

  function closeVideo() {
    const element = document.getElementById('videoModal');
    element.classList.remove('show');
    element.innerHTML = ""

  }
  document.addEventListener('load', () => {
    const modal = document.getElementById('modal');
    modal.addEventListener('keydown', event => {
      if (event.keyCode == 27) {
        modal.classList.remove('show');
        console.log('iran')
      }
    })
  })
  return (
    <section className="container section11">
      <div className="container video-placeholder-image mt-5 mb-5 text-light text-center p-5">
        <strong className="p-5">VIDEO</strong>
        <h2 className="mt-5">WATCH AS SYLVESTER STALONE

        JOINS THE REVOLUTION
          </h2>
        <div className=" p-5">
          <button type="button" id="video" onClick={toggle} className={`btn pdf-button text-light video-btn `} data-toggle="modal" data-src="https://www.youtube.com/watch?v=FtjlQB4lRe0" data-target="#myModal">
            WATCH FULL VIDEO
</button>
        </div>
      </div>

      <div class={`modal fade ${toggleClass ? 'show' : 'hide'}`} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <iframe width="475" className="p-2" height="400" src="https://www.youtube.com/embed/FtjlQB4lRe0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
            </div>

            <button type="button" class="btn btn-secondary" onClick={toggle} data-dismiss="modal">Close</button>


          </div>
        </div>
      </div>



    </section >
  )
}

export default StalloneVideo


  // < div className = {`modal fade ${toggleClass ? 'show' : ''}`} id = "videoModal" tabindex = "-1" role = "dialog" aria - labelledby="exampleModalCenterTitle" aria - hidden="true" >

  //   <div className="modal-dialog-centered modalContainer">
  //     <div id="videoPlayer ">
  //       <iframe width="700" height="350" src="https://www.youtube.com/embed/FtjlQB4lRe0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  //       <div className="text-center">
  //         <button type="button" onClick={closeVideo} class="btn btn-secondary" data-dismiss="modal">Close</button>
  //       </div>

  //     </div>

  //   </div>

  //     </div >
