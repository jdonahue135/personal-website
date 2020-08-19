import React from "react";
import { testimonials } from "../constants";

const Testimonials = (props) => {
  return (
    <div className="testimonials-container">
      <div className="headline testimonials-headline">References</div>
      <div className="testimonial">
        <div className="testimonial-text">
          {'"' + testimonials[0].text + '"'}
        </div>
        <div className="testimonial-info-container">
          <img
            src={testimonials[0].photo}
            alt="headshot"
            className="testimonial-headshot"
          />
          <div className="testimonial-id-container">
            <div className="testimonial-name">{testimonials[0].name}</div>
            <div className="testimonial-title">{testimonials[0].title}</div>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="testimonial-text">
          {'"' + testimonials[1].text + '"'}
        </div>
        <div className="testimonial-info-container">
          <img
            src={testimonials[1].photo}
            alt="headshot"
            className="testimonial-headshot"
          />
          <div className="testimonial-id-container">
            <div className="testimonial-name">{testimonials[1].name}</div>
            <div className="testimonial-title">{testimonials[1].title}</div>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="testimonial-text">
          {'"' + testimonials[2].text + '"'}
        </div>
        <div className="testimonial-info-container">
          <img
            src={testimonials[2].photo}
            alt="headshot"
            className="testimonial-headshot"
          />
          <div className="testimonial-id-container">
            <div className="testimonial-name">{testimonials[2].name}</div>
            <div className="testimonial-title">{testimonials[2].title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
