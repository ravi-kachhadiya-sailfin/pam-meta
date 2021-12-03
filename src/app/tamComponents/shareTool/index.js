import React from 'react';

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
  LinkedinIcon
} from "react-share";

import { shareTool } from 'app/shared/services/toolServices';
import { ShareToolContainer } from 'app/tamComponents/shareTool/ShareTool.style';

function ShareTool({ shareUrl, description, title, image, toolId }) {

  // console.log(shareUrl, description, title, image);
  const mailSubject = `Try this tool from PAM: ${title}`;
  const mailBody = `${title}: \n\n${description}\n\nURL:`;
  const socialText = `${mailSubject}\n\n${description}`;
  const twitterText = `${mailSubject}\n\n${description.substring(0, 280 - 6 - Number(shareUrl.length) - Number(mailSubject.length))}...`;

  return (
    <ShareToolContainer>
      <div className="whatsapp social-icons">
        <WhatsappShareButton url={shareUrl} title={socialText} separator=" " onClick={() => shareTool({ toolId: toolId, mediaType: 1 })}>
          <WhatsappIcon size={26} round bgStyle={{ fill: "#25d366" }} />
        </WhatsappShareButton>
      </div>

      <div className="linkedin social-icons">
        <LinkedinShareButton url={shareUrl} title={mailSubject} summry={description} onClick={() => shareTool({ toolId: toolId, mediaType: 2 })}>
          <LinkedinIcon size={29} round bgStyle={{ fill: "#0077b5" }} />
        </LinkedinShareButton>
      </div >

      <div className="facebook social-icons">
        <FacebookShareButton url={shareUrl} quote={socialText} onClick={() => shareTool({ toolId: toolId, mediaType: 3 })}>
          <FacebookIcon size={29} round bgStyle={{ fill: "#4267b2" }} />
        </FacebookShareButton>
      </div >

      <div className="twitter social-icons">
        <TwitterShareButton url={shareUrl} title={twitterText} onClick={() => shareTool({ toolId: toolId, mediaType: 4 })}>
          <TwitterIcon size={30} round bgStyle={{ fill: "#55acee" }} />
        </TwitterShareButton>
      </div >

      <div className="email social-icons" onClick={() => shareTool({ toolId: toolId, mediaType: 5 })}>
        <EmailShareButton url={shareUrl} subject={mailSubject} body={mailBody}>
          <EmailIcon size={36} round bgStyle={{ fill: "#7d7d7d" }} />
        </EmailShareButton>
      </ div>
    </ShareToolContainer>
  )
}

export default ShareTool;
