// NOTE: This file is maintained in the parent project TDS-AS Common.
//       Your application should avoid modifying this file.

import React from "react";
import ReactDOM from "react-dom";
import { AppRoot } from "AppRoot";
import { setupAxios } from "common";
import reportWebVitals from "reportWebVitals";
import "common/i18n";
import { AuthProvider } from "./app/features/registration/authService";
import MetaContextProvider from "app/shared/context/MetaProvider";
import ReactGA from 'react-ga4';
import { getWATrakingID } from "app/shared/Utils/index";

const tracking_id = getWATrakingID();

if(tracking_id){
  ReactGA.initialize(String(tracking_id));
}

setupAxios();
ReactDOM.render(
  <React.StrictMode>
    <MetaContextProvider>
    <AuthProvider>
      <AppRoot />
    </AuthProvider>
    </MetaContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
