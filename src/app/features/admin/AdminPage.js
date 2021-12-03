import React from "react";
import { useAuth } from "../../../common/auth/authService";

const AdminPage = () => {
  const admin = useAuth();

  return (
    <div>
      {admin.isAuthenticated
        ? "Welcome admin"
        : "You have landed to admin Page"}
    </div>
  );
};

AdminPage.propTypes = {};

export default AdminPage;
