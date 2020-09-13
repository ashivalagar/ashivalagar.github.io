import React from "react";
import { RightWrapper, IconStyling } from "./styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

export const SocialBar = () => {
  return (
    <RightWrapper>
      <IconStyling>
        <a href="https://www.instagram.com/shivalagar_2410/">
          <InstagramIcon />
        </a>
      </IconStyling>
      <IconStyling>
        <a href="https://github.com/ashivalagar">
          <GitHubIcon />
        </a>
      </IconStyling>
      <IconStyling>
        <a href="https://www.linkedin.com/in/ashivalagar/">
          <LinkedInIcon />
        </a>
      </IconStyling>
      <IconStyling>
        <a href="https://www.youtube.com/channel/UCqGX2QnBIB2IEslTCFYLjCA/videos">
          <YouTubeIcon />
        </a>
      </IconStyling>
    </RightWrapper>
  );
};
