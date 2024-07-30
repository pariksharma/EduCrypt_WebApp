import React from 'react'
import Button1 from '../buttons/button1/button1'
import { CiSearch } from "react-icons/ci";

const edulogo = '/assets/images/edulogo.png'

const Header = () => {

  // const isBrowser = typeof window !== "undefined";



  return (
    <>
      <nav className="px-5 navbar navbar-expand bg-white" id="eduNav">
          <div className="container-fluid">
              <a className="m-0" href="#">
                  {edulogo && <img className="logoImg" src={edulogo} alt="" />}
              </a>
              <div className="input-group ms-3 search">
                  <span style={{background: "#F1F1F1",color: "#717171",lineHeight: '10px',fontSize: '20px'}} className="d-none d-md-block input-group-text border-0" id="basic-addon1">
                      {/* <i className="bi bi-search"></i> */}
                      <CiSearch />
                  </span>
                  <input type="text" className="d-none d-md-block searchBar"  placeholder="What are you looking for..." aria-label="Username"
                      aria-describedby="basic-addon1" />
              </div>
                <Button1 value = "Explore/Register"/>
          </div>
      </nav>
    </>
  )
}

export default Header