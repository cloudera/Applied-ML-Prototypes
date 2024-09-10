import React, { FunctionComponent } from 'react';

interface Props {}


const Footer: FunctionComponent<Props> = () => {

  return (
    <div className="border-gray-200 border-l-0 border-r-0 border-b-0  border w-full">
      <div className="container-fluid   w-full p-2" style={{ zIndex: 999000 }}>
        <a className="text-cgreen" href="https://www.cloudera.com/" target="blank">Cloudera</a> 2021 - present. All Rights Reserved.
      </div>
    </div>
  );    
}

export default Footer;
