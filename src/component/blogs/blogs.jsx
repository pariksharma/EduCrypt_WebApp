import React, { useEffect, useState } from 'react';
import { blogAry } from '../../../public/assets/sampleArry';
import Button1 from '../buttons/button1/button1';

const Blogs = () => {

    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setTimeout(() =>{
            setIsLoading(true)
        }, 0)
    }, [])

    const handleBlogs = () => {
        console.log("All Blogs")
    }
  return (
    <>
    {/* {isLoading &&  */}
    <div className="container my-5">
        <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
                <h1 className="m-0 mb-3 blogHeading">Blogs</h1>
            </div>
        </div>
        <div className="row blogSection">
            {blogAry && blogAry.map((item, index) => {
                return (
                <div className="col-md-4 mb-3" key={index}>
                    <div className="card">
                        {item.image && <img className="blogImg" src={item.image} alt="" />}
                        <div className="m-0 bg_dark pt-3 ">
                            <div className='blogDate'>{item.date}</div>
                            <div className="m-0 blogTitle">{item.title}</div>
                        </div>
                    </div>
                </div>
                )
            })}            
        </div>
        <div className="row">
            <div className="col-12 mt-4 d-flex justify-content-center blogBtn">
                <Button1 value = "View All Blogs" handleClick = {handleBlogs}/>
            </div>
        </div>
    </div>
    {/* } */}
    </>
  )
}

export default Blogs