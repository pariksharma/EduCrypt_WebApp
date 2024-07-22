import React, { useState, useEffect } from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { useRouter } from 'next/navigation'
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

const SliderTrend = (props) => {
  const [showBtn, setShowBtn] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter()

  useEffect(() => {
    setIsClient(true);
  }, []);

  // if (!props.value) return <Skeleton style={{margin: '20px',width: '150px', height: '100px'}} />;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 img-fluid">
      <div 
        className="card border-0 b-radius mb-3 p-0 tredingSliderSection" 
        onMouseEnter={() => isClient && setShowBtn(true)} 
        onMouseLeave={() => isClient && setShowBtn(false)}
      >
        <div className="m-0 trendStripe">Best Seller</div>
        {isClient && showBtn && (
          <div className='explorebtn'>
            <FaLocationArrow 
            // onClick={() => navigate(`/explore-course/427`)} 
            onClick={() => router.push('/explore-course/427', { scroll: false })}
            />
          </div>
        )}
        {props.value && (
          <img 
            style={{borderRadius: "10px"}} 
            src={props.value} 
            className="card-img-top" 
            alt="..." 
          />
        )}
      </div>
    </div>
  );
};

export default SliderTrend;
