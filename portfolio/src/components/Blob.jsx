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
        viewBox="0 10 100 100"
        // viewBox="16.24 23.37 61.28 62.62" from svg crop the og
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="500px"
        height="500px"
        style={{ transition: 'all 0.3s ease 0s' }}
      >
        <defs>
          <mask id="svg-mask">
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stop-color="rgba(108, 85, 224, 1)"
                offset="0%"
              ></stop>
              <stop
                id="stop2"
                stop-color="rgba(89, 67, 203, 1)"
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
          stroke-width="0"
          stroke="url(#sw-gradient)"
        />
        <image
          href="/images/Logo.png"
          x="25%" // adjust the x and y coordinates as needed
          y="30%"
          width="50%"
          height="50%"
        />
      </svg>
      {/* Blob design 2 */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        id="sw-js-blob-svg"
        version="1.1"
        viewBox="14.22 25.95 64.7 51.84"
        width="500px"
        height="500px"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stop-color="rgba(108, 85, 224, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(89, 67, 203, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M27.7,-7.6C31.3,2.3,26.7,16.3,17.2,23.1C7.7,29.8,-6.6,29.3,-18.1,21.7C-29.7,14,-38.5,-0.7,-35,-10.3C-31.5,-20,-15.8,-24.6,-1.9,-24C12,-23.4,24,-17.6,27.7,-7.6Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          stroke="url(#sw-gradient)"
        />
        <image
          href="/images/Logo.png"
          x="25%" // adjust the x and y coordinates as needed
          y="30%"
          width="50%"
          height="50%"
        />
      </svg> */}
      {/* Blob design 3 */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        id="sw-js-blob-svg"
        version="1.1"
        viewBox="23.34 17.48 63.46 63.45"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stop-color="rgba(108, 85, 224, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(89, 67, 203, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M28.9,-15.1C36.1,-4.3,39.6,10.3,34.1,19.4C28.7,28.5,14.3,32.1,2.7,30.6C-9,29,-17.9,22.3,-22.7,13.5C-27.5,4.8,-28.1,-5.9,-23.6,-15.1C-19.1,-24.3,-9.6,-32.1,0.7,-32.5C10.9,-32.9,21.8,-25.9,28.9,-15.1Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          style="transition: all 0.3s ease 0s;"
          stroke="url(#sw-gradient)"
        />
        <image
          href="/images/Logo.png"
          x="25%" // adjust the x and y coordinates as needed
          y="30%"
          width="50%"
          height="50%"
        />
      </svg> */}
      {/* Blob design 4 */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        id="sw-js-blob-svg"
        version="1.1"
        viewBox="14.88 12.7 68.44 64.45"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stop-color="rgba(108, 85, 224, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(89, 67, 203, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M31.1,-20.1C35.9,-9.6,32.4,3.5,25.8,12.3C19.3,21,9.6,25.3,-2.4,26.7C-14.3,28.1,-28.7,26.4,-33.3,18.8C-38,11.2,-32.9,-2.5,-25.7,-14.3C-18.6,-26.1,-9.3,-36.1,1.9,-37.2C13.1,-38.3,26.3,-30.5,31.1,-20.1Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          style="transition: all 0.3s ease 0s;"
          stroke="url(#sw-gradient)"
        />
        <image
          href="/images/Logo.png"
          x="25%" // adjust the x and y coordinates as needed
          y="30%"
          width="50%"
          height="50%"
        />
      </svg> */}
      {/* Blob design 5 */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        id="sw-js-blob-svg"
        version="1.1"
        viewBox="4.44 18.36 87.26 71.95"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stop-color="rgba(108, 85, 224, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stop-color="rgba(89, 67, 203, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M16.6,-28.6C21.4,-26,25.1,-21.3,29.6,-16.2C34.2,-11.1,39.7,-5.5,41.2,0.9C42.8,7.3,40.4,14.6,36.3,20.6C32.2,26.6,26.5,31.3,20.2,34.6C13.8,38,6.9,40.1,-0.1,40.3C-7.1,40.5,-14.2,38.7,-19.5,34.7C-24.8,30.7,-28.2,24.5,-32.9,18.4C-37.6,12.2,-43.5,6.1,-45.1,-0.9C-46.7,-7.9,-44,-15.9,-38.6,-20.9C-33.3,-25.8,-25.3,-27.8,-18.4,-29.3C-11.5,-30.7,-5.7,-31.5,0.1,-31.6C5.9,-31.8,11.8,-31.2,16.6,-28.6Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
        />
        <image
          href="/images/Logo.png"
          x="25%" // adjust the x and y coordinates as needed
          y="30%"
          width="50%"
          height="55%"
        />
      </svg>
      ; */}
    </HomeBlobImgSVGWrapper>
  );
}

export default Blob;
