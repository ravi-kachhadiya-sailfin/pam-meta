import React, { useEffect } from "react";

import { useAlerts } from "../common/alerts/alertsService";
import Routes from "./Routes";
import { Alert } from "../common/alerts/Alert";
import './shared/global-style.css';
import CommonPopups from './features/CommonPopups';
//import './admin/css/font-awesome.css';
import ReactGA from 'react-ga4';

import { useLocation } from "react-router-dom";

export const App = () => {
  const { alert } = useAlerts();

  const { pathname } = useLocation();

  useEffect(() => {
    // Initialize google analytics page view tracking
    ReactGA.send({ hitType: "pageview", page: pathname });
    ReactGA.set({ page: pathname }); // Update the user's current page
  }, [pathname])

  //const history = useHistory();
  //const { t } = useTranslation();
  //const { currentUser } = useUsers();

  return (
    <>
      {alert.exists && <Alert />}
      <Routes />
      <CommonPopups />
    </>
  );
};
