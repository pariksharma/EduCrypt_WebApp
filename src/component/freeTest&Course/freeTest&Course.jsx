import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FreeContent from './freeContent';
import { freeCourseAry, freeTestAry } from '../../../public/assets/sampleArry';

const Free_Test_Course = () => {
  const [key, setKey] = useState('course');
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(true);
  //   }, 0);
  // }, []);

  return (<>
    <div className="container freeTC_container">
      {freeTestAry || freeCourseAry ? (
        <div className='heading_tab'> 
          <Tabs
            id="controlled-tab-example1"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 d-flex justify-content-center"
          >
            <Tab eventKey="course" title="Free Courses">
              {freeCourseAry && <FreeContent value={freeCourseAry} />}
            </Tab>
            <Tab eventKey="test" title="Free Test Series">
              {freeTestAry ? <FreeContent value={freeTestAry} /> 
              : 
              <div>Loading ....</div>}
            </Tab>
          </Tabs>
        </div>
      ) : null}
    </div>
  </>);
}

export default Free_Test_Course;
