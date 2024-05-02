import React from 'react'
import img_1 from '../images/img_1.jpg'
import img_2 from '../images/img_2.jpg'
import img_3 from '../images/img_3.jpg'
const WeOffer = () => {
  return (
    <div className="block-services-1 py-5">
  <div className="container">
    <div className="row">
      <div className="mb-4 mb-lg-0 col-sm-6 col-md-6 col-lg-3">
        <h3 className="mb-3">What We Offer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          rerum, aliquid velit minima inventore ad consequatur accusamus dolor.
        </p>
        <p>
          <a
            href="#"
            className="d-inline-flex align-items-center block-service-1-more"
          >
            <span>See all services</span>{" "}
            <span className="icon-keyboard_arrow_right icon" />
          </a>
        </p>
      </div>
      <div className="mb-4 mb-lg-0 col-sm-6 col-md-6 col-lg-3">
        <div className="block-service-1-card">
          <a href="#" className="thumbnail-link d-block mb-4">
            <img src={img_1} alt="Image" className="img-fluid" />
          </a>
          <h3 className="block-service-1-heading mb-3">
            <a href="#">Physical Therapy</a>
          </h3>
          <div className="block-service-1-excerpt">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              odit molestias inventore, id sed, in harum tenetur earum.
            </p>
          </div>
          <p>
            <a
              href="#"
              className="d-inline-flex align-items-center block-service-1-more"
            >
              <span>Find out more</span>{" "}
              <span className="icon-keyboard_arrow_right icon" />
            </a>
          </p>
        </div>
      </div>
      <div className="mb-4 mb-lg-0 col-sm-6 col-md-6 col-lg-3">
        <div className="block-service-1-card">
          <a href="#" className="thumbnail-link d-block mb-4">
            <img src={img_2} alt="Image" className="img-fluid" />
          </a>
          <h3 className="block-service-1-heading mb-3">
            <a href="#">Chiropractic Therapy</a>
          </h3>
          <div className="block-service-1-excerpt">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              odit molestias inventore, id sed, in harum tenetur earum.
            </p>
          </div>
          <p>
            <a
              href="#"
              className="d-inline-flex align-items-center block-service-1-more"
            >
              <span>Find out more</span>{" "}
              <span className="icon-keyboard_arrow_right icon" />
            </a>
          </p>
        </div>
      </div>
      <div className="mb-4 mb-lg-0 col-sm-6 col-md-6 col-lg-3">
        <div className="block-service-1-card">
          <a href="#" className="thumbnail-link d-block mb-4">
            <img src={img_3} alt="Image" className="img-fluid" />
          </a>
          <h3 className="block-service-1-heading mb-3">
            <a href="#">Massage Therapy</a>
          </h3>
          <div className="block-service-1-excerpt">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              odit molestias inventore, id sed, in harum tenetur earum.
            </p>
          </div>
          <p>
            <a
              href="#"
              className="d-inline-flex align-items-center block-service-1-more"
            >
              <span>Find out more</span>{" "}
              <span className="icon-keyboard_arrow_right icon" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default WeOffer