import React from 'react'
import { ImQuotesRight } from "react-icons/im";

const SliderTestimonial = (props) => {

  const testim_image = props.value.image;
  const testim_name = props.value.name;
  const testim_role = props.value.role;
  return (
    <div className="card p-2 border-0 shadow test-Radius">
        <div className="gap-1 d-flex align-items-center justify-content-start">
            {/* <i className="cardQuotes fas fa-quote-right"></i> */}
            <ImQuotesRight className='cardQuotes'/>
            <div>
              {testim_image && <img className="testImg" src={testim_image} alt="" />}
            </div>
            <div className="">
                <h4 className="testTitle">{testim_name}</h4>
                <div className="m-0 test-text">{testim_role}</div>
            </div>
        </div>
        <div className="m-0 p-text">
            {props.value.desc}
        </div>
    </div>
  )
}

export default SliderTestimonial