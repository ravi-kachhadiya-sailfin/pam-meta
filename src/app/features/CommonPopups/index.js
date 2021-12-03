import { useContext } from "react";
import LoginPage from "../login/LoginPage";
import { AppStoreContext } from "app/shared/store/AppStoreProvider";
import ForgotPassword from "../login/ForgotPassword";

const CommonPopups = () => {
  const { modal } = useContext(AppStoreContext);
  const { modalId } = modal;

  return (
    <>
      {modalId === 1 && <LoginPage show />}
      {modalId === 2 && <ForgotPassword show />}
    </>
  );
};

export default CommonPopups;
