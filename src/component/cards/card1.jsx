import React from 'react'
import Button1 from '../buttons/button1/button1';
import Button2 from '../buttons/button2/button2';
import { IoStar } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

const content_image = '/assets/images/slideImg.png';
const content_title = "Selection Hi Jawab Hai Something Special For VCAINS"

const Card1 = () => {

    const handleExplore = () => {
        console.log("buy now")
    }
  return (
        <div className="card border-0 shadow b-radius mb-3 p-2 course_card">
            {content_image && <img style={{borderRadius: "10px"}} src={content_image} className="card-img-top" alt="..." />}
            {/* <div className="m-0 free-badge">FREE</div> */}
            <div className="card-body pt-3 px-0 pb-0">
                <h6 className="mb-2 slideTitle">
                    {content_title}
                </h6>
                <div className="courserate">
                    <div className="courseRating">
                        <span className="rating"><IoStar /> {4.1}</span>
                    </div>
                    <div className="courseReview">
                        <span className="review"><p>{165} reviews</p></span>
                    </div>
                </div>
                <div className="courseDur">
                    <div className="courseValidity">
                        <span className='validity'><MdOutlineCalendarMonth /> Validity: {'180 Days'}</span>
                    </div>
                </div>
                <hr />
                <div className="coursePriceContainer">
                    <div className="coursePrice d-flex align-items-center pb-2 m-0">
                        <div className='Price'>
                            <FaRupeeSign className='rupeeSign' /><span className='costPrice'>{999}</span>
                        </div>
                        <div className='offPriceContainer'>
                            <div className='offPrice'>
                            </div>
                            <FaRupeeSign className='rupeeSign2' />{1500}
                        </div>
                        <div className='offPricePercentage'>
                            {`(15% Off)`}
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between onlineCourseButtons">
                    <Button1 value = "Explore" handleClick = {handleExplore} />
                    <Button2 value = "Buy Now" handleClick = {handleExplore} />
                </div>
            </div>
        </div>
  )
}

export default Card1