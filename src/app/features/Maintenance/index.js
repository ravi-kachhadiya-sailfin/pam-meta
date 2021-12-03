import React, { useEffect } from "react";
import { MaintenanceContainer } from "./Maintenance.style";
import MaintenanceImg from 'app/shared/assets/images/Maintenance.svg';
import NavBar from "app/tamComponents/maintenance-navbar/NavBar";
import Footer from "app/tamComponents/maintenance-footer/Footer";

const Maintenance = ({ title, banner }) => {
  useEffect(() => {
  }, []);
  return (
    <>
      <NavBar menuItemsHorizontal={[{
        title: "Donate",
        isAllow: true,
        isDonateButton: true,
      },]}
        menuItemsVertical={[]} subMenuItemsVertical={[]} />
      <MaintenanceContainer>
        <div className="container">
          <div className="error-container">
            <div className="text-404">PAM is undergoing maintenance but <br className="br-visible" />will be available again for you soon!</div>
            <img className="Path-10787" alt="Maintenance" src={MaintenanceImg} />
            <span className="details-text">
              We apologize for the inconvenience and look forward to seeing you here again.
            </span>
          </div>
        </div>
      </MaintenanceContainer>
      <Footer />
    </>
  );
};

export default Maintenance;
