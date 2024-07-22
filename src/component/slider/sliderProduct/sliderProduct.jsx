import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from 'next/router';

const SliderProduct = (props) => {

  const Router = useRouter()

  if(props.value) {
    return (
      <div className="mb-3 ourProductSection">
        <div className="card" 
        onClick={() => Router.push('/online-courses')}
        >
            {props.value && <img className="ourProImg" src={props.value} alt="" />}
            <a href="#" className="m-0 bg_dark p-2 d-flex align-items-center justify-content-between text-decoration-none">
                <h5 className="m-0 ourtitle">Online Courses</h5>
                <IoIosArrowForward />
            </a>
        </div>
    </div>
    )
  }
  else {
    null
  }
}

export default SliderProduct