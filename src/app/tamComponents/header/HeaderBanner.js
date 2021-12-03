import React, { useRef, useState } from 'react';
import { HeaderBannerContainerWrapper } from './HeaderBanner.styles';
import PropType from 'prop-types';
import Carousel from 'app/tamComponents/carousel';
import { BrowserDetect } from 'app/shared/Utils/index';
import LottieGif from "app/shared/assets/images/lottie_gifs/headphone-illustration.gif";
// import "../../shared/assets/css/owl.carousel.min.css";
// import "../../shared/assets/css/owl.theme.min.css";
// import "../../shared/assets/css/testimonialSlider.css";

/*Header Banner which have Banner and title for the entire app.
 *
 */
const HeaderBanner = (props) => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  const [browser] = useState(BrowserDetect());

  return (
    <HeaderBannerContainerWrapper>

      <div className="how-it-works-mobile" onClick={() => window.location.href = "#find-right-tools"}>{props.bannerTitle}</div>
      {browser === "safari" ?
        <img class="TAM-Hero safari-img" onClick={() => window.location.href = "#find-right-tools"} src={LottieGif} alt={props.bannerTitle} />
        : <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          renderer="svg"
          src="https://assets1.lottiefiles.com/packages/lf20_aaodbj8k/STN-TAM-Hero graphic animation/TAM-hero graphic.json"
          // src="http://airbnb.io/lottie/images/Introduction_00_sm.gif"
          class="TAM-Hero"
          onClick={() => window.location.href = "#find-right-tools"}
        ></lottie-player>
      }
      {/* <lottie-player class="TAM-Hero" src="https://assets1.lottiefiles.com/packages/lf20_aaodbj8k/STN-TAM-Hero graphic animation/TAM-hero graphic.json" background="transparent" speed="1" loop autoplay></lottie-player> */}
      {/* <img class="TAM-Hero" onClick={() => window.location.href = "#find-right-tools"} src={LottieGif} alt={props.bannerTitle} /> */}
      <div className="banner-theme">
        <div className="how-it-works-desktop" onClick={() => window.location.href = "#find-right-tools"}>{props.bannerTitle}</div>
        <Carousel textAlign="right" interval={6000} className="home-banner-slider">
          {!!props.bannerCarouselData && props.bannerCarouselData.map((element, i) => (
            <div className="banner-container" key={element.title + i}>
              <div className="banner-sub-title">{element.title}</div>
              <div className="banner-tag-line">{element.line}</div>
            </div>
          ))}
        </Carousel>
        {/* <div id="banner-slider" className="owl-carousel">
          {props.bannerCarouselData.map((element, i) => (
            <div className="banner-container" key={element.title + i}>
              <div className="banner-sub-title">{element.title}</div>
              <div className="banner-tag-line">{element.line}</div>
            </div>
          ))}
        </div> */}
      </div>
    </HeaderBannerContainerWrapper>
  );
};

HeaderBanner.propTypes = {
  bannerImagePath: PropType.string.isRequired,
  bannerTitle: PropType.string.isRequired,
  bannerCarouselData: PropType.array.isRequired,
};

export default HeaderBanner;
