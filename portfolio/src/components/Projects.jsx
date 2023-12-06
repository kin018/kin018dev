import React from 'react';
import {
  ProjectMainContainer,
  ProjectMainTitle,
  ProjectCarousel,
  ProjectCarouselSlide,
  ProjectCarouselSlideImg,
} from '../styledComponents/StyledComponents';

function Projects() {
  return (
    <ProjectMainContainer>
      <ProjectMainTitle>Projects</ProjectMainTitle>
      <ProjectCarousel>
        <ProjectCarouselSlide>
          <ProjectCarouselSlideImg
            src="../images/comingSoon.jpg"
            alt="comingSoon1"
          />
          <ProjectCarouselSlideImg
            src="../images/comingSoon.jpg"
            alt="comingSoon2"
          />
          <ProjectCarouselSlideImg
            src="../images/comingSoon.jpg"
            alt="comingSoon3"
          />
          <ProjectCarouselSlideImg
            src="../images/comingSoon.jpg"
            alt="comingSoon4"
          />
          <ProjectCarouselSlideImg
            src="../images/comingSoon.jpg"
            alt="comingSoon5"
          />
          <ProjectCarouselSlideImg
            src="../images/comingSoon.jpg"
            alt="comingSoon6"
          />
          <ProjectCarouselSlideImg
            src="../images/comingSoon.jpg"
            alt="comingSoon7"
          />
        </ProjectCarouselSlide>
        <ProjectCarouselSlide>
          <ProjectCarouselSlideImg
            src="../images/comingSoon.jpg"
            alt="comingSoon1"
          />
          <ProjectCarouselSlideImg
            src="../images/comingSoon.jpg"
            alt="comingSoon2"
          />
          <ProjectCarouselSlideImg
            src="../images/comingSoon.jpg"
            alt="comingSoon3"
          />
          <ProjectCarouselSlideImg
            src="../images/comingSoon.jpg"
            alt="comingSoon4"
          />
          <ProjectCarouselSlideImg
            src="../images/comingSoon.jpg"
            alt="comingSoon5"
          />
          <ProjectCarouselSlideImg
            src="../images/comingSoon.jpg"
            alt="comingSoon6"
          />
          <ProjectCarouselSlideImg
            src="../images/comingSoon.jpg"
            alt="comingSoon7"
          />
        </ProjectCarouselSlide>
      </ProjectCarousel>
    </ProjectMainContainer>
  );
}

export default Projects;
