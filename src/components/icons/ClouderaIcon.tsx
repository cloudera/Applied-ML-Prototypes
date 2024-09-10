import React, { SVGProps } from 'react';

const ClouderaIcon = (props: SVGProps<SVGSVGElement>) => (
  <span className="anticon anticon-appstore ant-menu-item-icon">
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.667 8A6.667 6.667 0 1 1 1.334 8a6.667 6.667 0 0 1 13.333 0"
        fill="#F96702"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.194 10.635c-1.455 0-2.528-1.147-2.528-2.65 0-1.502 1.073-2.647 2.527-2.647.72 0 1.32.281 1.744.748l1.306-1.307c-.78-.777-1.862-1.237-3.09-1.237-2.559 0-4.53 1.952-4.53 4.444s1.971 4.445 4.53 4.445c1.26 0 2.38-.498 3.172-1.335l-1.307-1.305c-.425.522-1.056.844-1.825.844"
        fill="#fff"
      />
    </svg>
  </span>
);

export default ClouderaIcon;
