import React from 'react'
import image1 from '../images/person_1.jpg'
import image2 from '../images/person_2.jpg'
import image3 from '../images/person_3.jpg'
import image4 from '../images/person_4.jpg'

const Customers = () => {
  return (
    <div className="site-section">
  <div className="container">
    <div className="row mb-5">
      <div className="col-md-12 text-center">
        <h2 className="site-section-heading text-center font-secondary">
          Happy Customers
        </h2>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="owl-carousel-2 owl-carousel">
          <div className="d-block block-testimony mx-auto text-center">
            <div className="person w-25 mx-auto mb-4">
              <img
                src={image1}
                alt="Image"
                className="img-fluid rounded-circle w-50 mx-auto"
              />
            </div>
            <div>
              <h2 className="h5 mb-4">Katie Johnson</h2>
              <blockquote>
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                accusantium qui optio, possimus necessitatibus voluptate aliquam
                velit nostrum tempora ipsam!”
              </blockquote>
            </div>
          </div>
          <div className="d-block block-testimony mx-auto text-center">
            <div className="person w-25 mx-auto mb-4">
              <img
                src={image2}
                alt="Image"
                className="img-fluid rounded-circle w-50 mx-auto"
              />
            </div>
            <div>
              <h2 className="h5 mb-4">Jun Mars</h2>
              <blockquote>
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                accusantium qui optio, possimus necessitatibus voluptate aliquam
                velit nostrum tempora ipsam!”
              </blockquote>
            </div>
          </div>
          <div className="d-block block-testimony mx-auto text-center">
            <div className="person w-25 mx-auto mb-4">
              <img
                src={image3}
                alt="Image 3"
                className="img-fluid rounded-circle w-50 mx-auto"
              />
            </div>
            <div>
              <h2 className="h5 mb-4">Katie Johnson</h2>
              <blockquote>
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                accusantium qui optio, possimus necessitatibus voluptate aliquam
                velit nostrum tempora ipsam!”
              </blockquote>
            </div>
          </div>
          <div className="d-block block-testimony mx-auto text-center">
            <div className="person w-25 mx-auto mb-4">
              <img
                src={image4}
                alt="Image"
                className="img-fluid rounded-circle w-50 mx-auto"
              />
            </div>
            <div>
              <h2 className="h5 mb-4">Jun Mars</h2>
              <blockquote>
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                accusantium qui optio, possimus necessitatibus voluptate aliquam
                velit nostrum tempora ipsam!”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Customers