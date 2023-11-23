import React from 'react';
import {
  // HomeBlobImg,
  HomeBlobImgSVGWrapper,
} from '../styledComponents/StyledComponents';

function Blob() {
  return (
    <HomeBlobImgSVGWrapper>
      {/* Blob was created using https://www.softr.io/tools/svg-shape-generator */}

      {/* Blob design 1 */}
      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
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
          transform="translate(50 50)"
          strokeWidth="0"
        ></path>
      </svg>

      {/* Blob design 2 */}
      {/* <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
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
          d="M27.7,-7.6C31.3,2.3,26.7,16.3,17.2,23.1C7.7,29.8,-6.6,29.3,-18.1,21.7C-29.7,14,-38.5,-0.7,-35,-10.3C-31.5,-20,-15.8,-24.6,-1.9,-24C12,-23.4,24,-17.6,27.7,-7.6Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          style={{ transition: 'all 0.3s ease 0s' }}
          stroke="url(#sw-gradient)"
        ></path>
      </svg> */}

      {/* Blob design 3 */}
      {/* <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
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
          d="M28.9,-15.1C36.1,-4.3,39.6,10.3,34.1,19.4C28.7,28.5,14.3,32.1,2.7,30.6C-9,29,-17.9,22.3,-22.7,13.5C-27.5,4.8,-28.1,-5.9,-23.6,-15.1C-19.1,-24.3,-9.6,-32.1,0.7,-32.5C10.9,-32.9,21.8,-25.9,28.9,-15.1Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          style={{ transition: 'all 0.3s ease 0s' }}
          stroke="url(#sw-gradient)"
        ></path>
      </svg> */}
      {/* Blob design 4 */}
      {/* <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
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
          d="M28.9,-15.1C36.1,-4.3,39.6,10.3,34.1,19.4C28.7,28.5,14.3,32.1,2.7,30.6C-9,29,-17.9,22.3,-22.7,13.5C-27.5,4.8,-28.1,-5.9,-23.6,-15.1C-19.1,-24.3,-9.6,-32.1,0.7,-32.5C10.9,-32.9,21.8,-25.9,28.9,-15.1Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          style={{ transition: 'all 0.3s ease 0s' }}
          stroke="url(#sw-gradient)"
        ></path>
      </svg> */}
    </HomeBlobImgSVGWrapper>
  );
}

export default Blob;
