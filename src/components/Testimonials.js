import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../components/styles/Testimonials.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img className="testimonial-img" src="https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-testimonial-1_hP5ojsceu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675153905015" alt="James Gordon" />
          <div className="myCarousel">
            <h3>James Gordon</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img className="testimonial-img" src="https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-testimonial-2_2HL7LRpbth.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675153905011" alt="Sheila Stone" />
          <div className="myCarousel">
            <h3>Sheila Stone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img className="testimonial-img" src="https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-testimonial-3_vBcNR58S4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675153904991" alt="Abigail Sharp" />
          <div className="myCarousel">
            <h3>Abigail Sharp</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>

        <div>
          <img className="testimonial-img" src="https://ik.imagekit.io/zenius/Coursera/html-css/little-lemon-testimonial-4_AB23rmZoI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675153905002" alt="Thomas Chang" />
          <div className="myCarousel">
            <h3>Thomas Chang</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}