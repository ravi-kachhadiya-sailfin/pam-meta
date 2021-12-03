import React, { useState } from 'react';

export const AppStoreContext = React.createContext();

const AppStoreContextProvider = (props) => {
  /*
    0 - Close
    1 - Login
    2 - Forget
   */
  const [modal, setModal] = useState({
    modalId: 0,
    modalData: {},
  });

  return <AppStoreContext.Provider value={{ modal: modal, setModal: setModal }}>
    {props.children}
  </AppStoreContext.Provider>
}

export default AppStoreContextProvider;