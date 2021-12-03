import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../../tamComponents/header/Header";
import HeaderTitle from "../../tamComponents/header/HeaderTitle";
import HeaderBanner from "../../tamComponents/header/HeaderBanner";
import { verifyEmail } from "app/shared/services/auth";
import { ROUTES } from "app/Routes";

//Custom hook
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ValidateUser = () => {
  let history = useHistory();
  let query = useQuery();
  // const [isAuthValid, setAuthValid] = useState(false);
  const [counter, setCounter] = React.useState(10);
  // const [respMessage, setRespMessage] = React.useState("");

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  React.useEffect(() => {
    if (counter === 0) {
      history.push(ROUTES.default);
    }
  }, [counter, history]);

  useEffect(() => {
    verifyEmail(query.get("token"))
      .then((msg) => {
        // setAuthValid(true);
        // setRespMessage(msg);
        setHeaderTitle(
          <HeaderTitle
            title={"Success"}
            content={
              <h3>
                <br />
                Thank you for completing the registration steps and your account
                is activated. We suggest you login using your credentials and
                continue your journey of mental well-being.
                <br />
              </h3>
            }
          />
        );
      })
      .catch((msg) => {
        // setRespMessage(msg);
        setHeaderTitle(
          <HeaderTitle
            title={"Failed"}
            content={
              <h3>
                <br />
                Your account is not activated. Either the activation link has
                expired. We encourage you to register again and if that does not
                resolve the issue please write to us at techsupport@tam.com.
                <br />
              </h3>
            }
          />
        );
        // setAuthValid(false);
      });
  }, [query]);

  const homeHeaderTitle = <HeaderTitle title={""} content={""} />;
  const [headerTitle, setHeaderTitle] = useState(homeHeaderTitle);

  const homeHeaderBanner = (
    <HeaderBanner
      //bannerImagePath={banner_img_1}
      bannerTitle={""}
      bannerCarouselData={[]}
    />
  );

  const [headerBanner] = useState(homeHeaderBanner);

  return (
    <>
      <Header headerTitle={headerTitle} headerBanner={headerBanner} />
    </>
  );
};
export default ValidateUser;
