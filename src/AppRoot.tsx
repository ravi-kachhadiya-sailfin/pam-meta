// NOTE: This file is maintained in the parent project TDS-AS Common.
//       Your application should avoid modifying this file.
import { AlertsProvider, Page, Theme } from "common";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { App } from "app/App";
import { UsersProvider } from "./app/features/registration/usersService";
import AppStoreContextProvider from "app/shared/store/AppStoreProvider";

export const AppRoot = () => {

  return (
    <div>
      {/*{auth.isAuthenticated ? (*/}
      <MuiThemeProvider theme={Theme}>
        <BrowserRouter >
          <AlertsProvider>
            <UsersProvider>
              <AppStoreContextProvider>
                <Page>
                  <App />
                </Page>
              </AppStoreContextProvider>
            </UsersProvider>
          </AlertsProvider>
        </BrowserRouter>
      </MuiThemeProvider>
      {/*) : null}*/}
    </div>
  );
};
