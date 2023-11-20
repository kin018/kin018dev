import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  SocialMediaIconDiv,
  SocialMediaIconLink,
} from '../styledComponents/StyledComponents';

function SocialMedia() {
  const githubPath = 'http://github.com/kin018';
  const linkedinPath = 'https://www.linkedin.com/in/kenechukwu-n-261a11228/';
  const twitterPath = 'https://www.twitter.com/kin018_';
  const instagramPath = 'http://www.instagram.com/kin018_';

  return (
    <SocialMediaIconDiv>
      <SocialMediaIconLink
        href={githubPath}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="GitHub"
      >
        <GitHubIcon aria-label="GitHub" alt="GitHub" />
      </SocialMediaIconLink>

      <SocialMediaIconLink
        href={linkedinPath}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn"
      >
        <LinkedInIcon aria-label="LinkedIn" alt="LinkedIn" />
      </SocialMediaIconLink>

      <SocialMediaIconLink
        href={twitterPath}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Twitter"
      >
        <TwitterIcon aria-label="Twitter" alt="Twitter" />
      </SocialMediaIconLink>

      <SocialMediaIconLink
        href={instagramPath}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Instagram"
      >
        <InstagramIcon aria-label="Instagram" alt="Instagram" />
      </SocialMediaIconLink>
    </SocialMediaIconDiv>
  );
}

export default SocialMedia;
