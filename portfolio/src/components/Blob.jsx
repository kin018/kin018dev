import React from 'react';
import {
  // HomeBlobImg,
  HomeBlobImgSVGWrapper,
} from '../styledComponents/StyledComponents';

function Blob() {
  return (
    <HomeBlobImgSVGWrapper>
      {/* Blob was created using https://www.softr.io/tools/svg-shape-generator */}
      {/* Used https://svgcrop.com/ to remove all blank annoying space  */}
      {/* Blob design 1 */}
      <svg
        id="sw-js-blob-svg"
        // viewBox="0 10 100 100"
        viewBox="16.24 23.37 61.28 62.62"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="100%"
        style={{ transition: 'all 0.3s ease 0s' }}
      >
        <defs>
          <mask id="svg-mask">
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stopColor="rgba(108, 85, 224, 1)"
                offset="0%"
              ></stop>
              <stop
                id="stop2"
                stopColor="rgba(89, 67, 203, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </mask>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M25.2,-20.6C29.3,-14.9,27.1,-4.6,25.1,6.4C23.2,17.4,21.4,29.1,14.6,33.6C7.8,38.2,-4.1,35.6,-14.2,30.4C-24.4,25.2,-32.9,17.3,-33.7,9C-34.5,0.7,-27.7,-8,-20.8,-14.3C-13.9,-20.7,-7,-24.7,1.8,-26.1C10.5,-27.5,21,-26.3,25.2,-20.6Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          stroke="url(#sw-gradient)"
        />
        <image
          href="/images/Logo.png"
          x="32%" // adjust the x & y coordinates as needed
          y="45%"
          width="100%"
          height="85%"
        />
      </svg>
    </HomeBlobImgSVGWrapper>
  );
}

export default Blob;
