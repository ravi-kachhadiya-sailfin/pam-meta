import React, { useRef, useState } from 'react';
import { HeaderBannerContainerWrapper } from './HeaderBanner.styles';
import PropType from 'prop-types';
import LottieGif from "app/shared/assets/images/lottie_gifs/ripple-zen-3.gif";
import { BrowserDetect } from 'app/shared/Utils/index';

// import Carousel from 'app/tamComponents/carousel';

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

  // function scrollDown(e){
  //   e.preventDefault();
  //   document.querySelector('html, body').animate({ scrollTop: document.querySelector(document.querySelector(this).attr('href')).offset().top}, 500, 'linear');
  // }
  return (
    <HeaderBannerContainerWrapper className="login_after_banner">
      <div className="how-it-works-mobile">{props.bannerTitle}</div>
      {browser === "safari" ?
        <img class="TAM-Hero TAM-Hero-login safari-img" onClick={() => window.location.href = "#find-right-tools"} src={LottieGif} alt={props.bannerTitle} />
        :
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          // src="https://assets1.lottiefiles.com/packages/lf20_er5v8etc/RippleZen-lottie-v3/SU-RippleZen-v3.json"
          src="https://assets1.lottiefiles.com/packages/lf20_2qb91az8.json"
          class="TAM-Hero TAM-Hero-login"
        ></lottie-player>
      }

    </HeaderBannerContainerWrapper>
  );
};

HeaderBanner.propTypes = {
  bannerImagePath: PropType.string.isRequired,
  bannerTitle: PropType.string.isRequired,
  bannerCarouselData: PropType.array.isRequired,
};

export default HeaderBanner;
