import React, { useCallback, useState } from 'react';
import HeaderTitle from '../../tamComponents/header/HeaderTitle';
import HeaderBanner from '../../tamComponents/header/HeaderBanner';
import banner_img_1 from '../../shared/assets/images/banner_img_1.png';
import { BANNER_CAROUSEL_DATA, BANNER_TITLE, HEADER_CONTENT, HEADER_TITLE } from '../../shared/constants';
import Header from '../../tamComponents/header/Header';
import LoginPage from '../login/LoginPage';
import HomePageLoggedOut from './HomePageLoggedOut';

const LoggedOutComponent = (props) => {
  //    const {alert} = useAlerts();
  // const history = useHistory();
  // const location = useLocation();
  //const { t } = useTranslation();
  //const { currentUser } = useUsers();
  const homeHeaderTitle = <HeaderTitle title={HEADER_TITLE} content={HEADER_CONTENT} />;
  const [headerTitle] = useState(homeHeaderTitle);

  var changeTitle = useCallback(({ title, content }) =>
    {},[]
  );

  const homeHeaderBanner = (
    <HeaderBanner bannerImagePath={banner_img_1} bannerTitle={BANNER_TITLE} bannerCarouselData={BANNER_CAROUSEL_DATA} />
  );

  const [headerBanner, setHeaderBanner] = useState(homeHeaderBanner);
  const changeBanner = useCallback(({ data }) => setHeaderBanner(data),[]);
  // const closeModal = useCallback(({ isClose }) => setShowLogin(isClose),[]);
  const [showLogin] = useState(false);

  return (
    <>
      <Header headerTitle={headerTitle} headerBanner={headerBanner} />
      <LoginPage show={showLogin} />
      <HomePageLoggedOut title={changeTitle} banner={changeBanner} />
    </>
  );
};
LoggedOutComponent.propTypes = {};

export default LoggedOutComponent;
