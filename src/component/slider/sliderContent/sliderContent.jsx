import React from 'react'
import Button1 from '../../buttons/button1/button1'
import { useRouter } from 'next/router'

const SliderContent = (props) => {

    const router = useRouter()

    const handleExplore = () => {
        console.log("Clicked ==========")
        router.push('/view-detail/422')
        // navigate('/viewDetail/422')
        // location.reload()
    }

    const content_image = props.value.image;
    const content_title = props.value.title;

    
    if(props.value) {
        return (
        <div className="card border-0 shadow b-radius mb-3 p-2 freeCard">
            {content_image && <img style={{borderRadius: "10px"}} src={content_image} className="card-img-top" alt="..." />}
            <div className="m-0 free-badge">FREE</div>
            <div className="card-body pt-3 px-0 pb-0">
                <h6 className="mb-2 slideTitle">
                    {content_title}
                </h6>
                <div className="m-0 clearfix">
                    <div className="countTitle"><i className="fab fa-youtube"></i> 120 videos</div>
                    <div className="countTitle ms-3"><i className="far fa-file-alt"></i> 40 PDF's</div>
                </div>
                {/* <button className="btn exploreBtn">Explore now</button> */}
                <Button1 value = "Explore" handleClick = {handleExplore} />
                <div className="freeStripe m-0">
                    Free
                </div>
            </div>
        </div>
        )
    }
    else {
        null
    }
}

export default SliderContent