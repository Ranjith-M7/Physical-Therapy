import React from 'react'
import img1 from '../images/herobg1.jpg'
const ChooseUs = () => {
  return (
    <div className="block-half-content-1 d-block d-lg-flex mt-5">
  <div
    className="block-half-content-img"
    style={{ backgroundImage: `url(${img1})` }}
  ></div>
  <div className="block-half-content-text bg-primary">
    <div className="block-half-content-text-inner">
      <h2 className="block-half-content-heading mb-4">Why Choose Us</h2>
      <div className="block-half-content-excerpt">
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur
          possimus nam totam, repellat expedita ullam amet velit.
        </p>
      </div>
    </div>
    <div className="block-counter-1 section-counter">
      <div className="row">
        <div className="col-sm-4">
          <div className="counter">
            <div className="number-wrap">
              <span className="block-counter-1-number" data-number={3}>
                0
              </span>
              <span className="append">K</span>
            </div>
            <span className="block-counter-1-caption">Happy Customers</span>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="counter">
            <div className="number-wrap">
              <span className="block-counter-1-number" data-number={7}>
                0
              </span>
              <span
                className="append
"
              />
            </div>
            <span className="block-counter-1-caption">Years of Experience</span>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="counter">
            <div className="number-wrap">
              <span className="block-counter-1-number" data-number={100}>
                0
              </span>
              <span className="append">%</span>
            </div>
            <span className="block-counter-1-caption">Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ChooseUs