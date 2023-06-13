import React from "react";

import "./ButonShare.css";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WhatsappIcon,
} from "react-share";

const ButonShare = () => {
  const shareUrl = window.location.href;

  return (
    <>
      <TelegramShareButton url={shareUrl}>
        <TelegramIcon className="shareButton" size={60} />
      </TelegramShareButton>
      <EmailShareButton url={shareUrl}>
        <EmailIcon className="shareButton" size={60} />
      </EmailShareButton>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon className="shareButton" size={60} />
      </FacebookShareButton>
      <VKShareButton url={shareUrl}>
        <VKIcon className="shareButton" size={60} />
      </VKShareButton>
      <TwitterShareButton url={shareUrl}>
        <TwitterIcon className="shareButton" size={60} />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon className="shareButton" size={60} />
      </LinkedinShareButton>
      <ViberShareButton url={shareUrl}>
        <ViberIcon className="shareButton" size={60} />
      </ViberShareButton>
      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon className="shareButton" size={60} />
      </WhatsappShareButton>
    </>
  );
};

export default ButonShare;
