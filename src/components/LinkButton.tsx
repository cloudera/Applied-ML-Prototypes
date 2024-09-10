import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface Props {
  label: string; 
  url: string;   
};

const Container = styled.div`
  a {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
    display: inline-block;
    border-radius: .25rem;
    background-color: rgba(49, 87, 104, 1);
    outline: none;
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s;
    -webkit-text-decoration-skip: objects;
    padding-right: 1.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: rgba(255, 255, 255, 1);
  }
`;

const LinkButton: FunctionComponent<Props> = ({ url, label }) => {
  return (
    <div>
      <a target="_blank" rel="noreferrer" href={url} className="group   pr-7 transition duration-500 hover:opacity-90 hover:text-white text-base inline-block rounded  bg-cgreen py-3 px-4 font-semibold text-white"> 
        {label}
        <span className="ml-1 inline-block transition transform group-hover:translate-x-2 duration-500"> → </span>
      </a>
    </div>
  )
}

export default LinkButton;