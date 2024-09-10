import { Col, Row } from 'antd';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import LinkButton from '../LinkButton';

interface Props {};


const Container = styled.div`
  color: #315768;
  display: inline-block;
  svg {
    transition-duration: .1s;
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-transform;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
  }
  .icon-wrapper {
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    margin-top: auto;
    margin-bottom: auto;
  }
  .row-wrapper {
    display: flex;
    color: #315768;
    margin-bottom: .5rem;
    .row-title {
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 600;
      margin-left: 1rem;
    }
  }   
`;

const DocumentationSection: FunctionComponent<Props> = () => {
  return (
    <Container>
      <Row>
        <Col sm={24}>
          <div className="row-wrapper"> 
            <div className="icon-wrapper">
            <svg aria-hidden="true" className=" mr-1 inline h-6 w-6  transition duration-100  text-null-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.566 17.842c-.945 2.462-3.678 4.012-6.563 4.161.139-2.772 1.684-5.608 4.209-6.563l.51.521c-1.534 1.523-2.061 2.765-2.144 3.461.704-.085 2.006-.608 3.483-2.096l.505.516zm-1.136-11.342c-1.778-.01-4.062.911-5.766 2.614-.65.649-1.222 1.408-1.664 2.258 1.538-1.163 3.228-1.485 5.147-.408.566-1.494 1.32-3.014 2.283-4.464zm5.204 17.5c.852-.44 1.61-1.013 2.261-1.664 1.708-1.706 2.622-4.001 2.604-5.782-1.575 1.03-3.125 1.772-4.466 2.296 1.077 1.92.764 3.614-.399 5.15zm11.312-23.956c-.428-.03-.848-.044-1.261-.044-9.338 0-14.465 7.426-16.101 13.009l4.428 4.428c5.78-1.855 12.988-6.777 12.988-15.993v-.059c-.002-.437-.019-.884-.054-1.341zm-5.946 7.956c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"></path></svg>
            </div>
            <div className="row-title">Getting Started</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={24}>
        <div className="text-base">
            To get started, ensure you have the latest version of Cloudera Machine learning, sign in and navigate to the AMP catalog.<br/> New to Cloudera Machine Learning? Sign up for a trial 
           
            <a target="_blank" rel="noreferrer" href="https://trycloudera.com/"> here</a>.

            <div className="mb-10">
            <div className="mt-5 inline-block">
              <LinkButton url="https://trycloudera.com/" label="Try Cloudera Machine Learning" />
            </div>
            <div className="mt-5 inline-block" style={{ marginLeft: '5px'}}>
            <LinkButton url="https://docs.cloudera.com/machine-learning/cloud/applied-ml-prototypes/topics/ml-amps-overview.html" label="AMP Documentation" />
            </div>
            </div>
            
            </div>
            
            {/* <div className="mb-10"><div className="mt-5 inline-block">
                
                <div className=" "><a target="_blank" rel="noreferrer" href="https://trycloudera.com/" className="group   pr-7 transition duration-500 hover:opacity-90 hover:text-white text-base inline-block rounded  bg-cgreen py-3 px-4 font-semibold text-white"> 
                Try Cloudera Machine Learning <span className="ml-1   inline-block transition transform group-hover:translate-x-2 duration-500"> → </span></a></div></div> <div className="mt-5 inline-block"><div className=" ">
                    <a target="_blank" rel="noreferrer" href="https://docs.cloudera.com/machine-learning/cloud/applied-ml-prototypes/topics/ml-amps-overview.html" className="group   pr-7 transition duration-500 hover:opacity-90 hover:text-white text-base inline-block rounded  bg-cgreen py-3 px-4 font-semibold text-white"> 
                    AMP Documentation <span className="ml-1   inline-block transition transform group-hover:translate-x-2 duration-500"> → </span></a></div></div></div></div> */}
        </Col>
      </Row>
    </Container>      
  );
}

export default DocumentationSection;