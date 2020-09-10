import React, { useState } from "react"

const reviews = [
  {
    author: "Forbes Magazine",
    location: "",
    text:
      "If you had room for just one grill, look no further than this masterpice!",
  },
  {
    author: "Charles W.",
    location: "Knoxville, TN",
    text:
      "This grill is amazing!!!! When I first saw this grill, I fell in love with it. It is definitely a conversation piece when I barbecue with friends and family and the centerpiece of my outdoor kitchen. The grill cooks amazing as well. I highly recommend the searing grate if you cook steaks or burgers a lot as it sears great! So far, I have not had the chance to smoke with it, but hope to soon. Fantastic buy!!!!",
  },
  {
    author: "Kyle Loyd",
    location: "Houston, TX",
    text:
      "Awesome Product and customer service This grill is a beast and cooks FANTASTIC! I love the versatility of being able to use gas when I need to cook up a quick dinner after a long day at work. When the weekend rolls around and I have time to use wood or charcoal for a low and slow or hot and fast cook, both of which give incredible flavor! LOVE THE ROTISSERIE!!!! The look alone of this grill says it all! The customer service is absolutely the best. AMG and BBQGuys.com back up their products and the products they sell. I will forever be a customer. I would highly recommend AMG and BBQGuys.com for all your BBQ'n and Grill'n needs. Thanks again for all the help.",
  },
]

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <section id="reviews">
      <div className=" py-5 container">
        <div className="row">
          <div className=" mb-5 review-selector col-12 d-flex justify-content-center">
            {reviews.map((review, i) => (
              <div
                key={i}
                onClick={() => setSelectedReview(i)}
                data-review-num={i}
                className={`mx-2 ${i === selectedReview ? "selected" : ""}`}
              ></div>
            ))}
          </div>
          <div
            className={`review mb-4 col-12 text-center ${
              isExpanded ? "expanded" : ""
            }`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="pb-5">
              <p className="mb-0 author text-uppercase">
                {reviews[selectedReview].author}
              </p>
              <p className="text-uppercase">
                <i>
                  {reviews[selectedReview].location.length ? (
                    reviews[selectedReview].location
                  ) : (
                    <br />
                  )}
                </i>
              </p>
              <p className="quote">"{reviews[selectedReview].text}"</p>
            </div>
            <div className="w-100 text-fade"></div>
          </div>
          <div className="col-12 text-center">
            <a
              href="https://www.forbes.com/sites/larryolmsted/2017/08/09/best-bbq-grills-raw-power-that-lets-you-flex-your-backyard-cooking-muscles/"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 d-inline-block press-link text-uppercase"
            >
              Read More Press
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
