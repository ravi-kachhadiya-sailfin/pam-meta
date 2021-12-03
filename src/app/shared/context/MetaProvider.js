import React, { useState } from 'react';
import logo from 'app/shared/assets/images/logos/logo1.svg';
export const MetaContext = React.createContext();

const MetaContextProvider = (props) => {
  const [meta, setMeta] = useState({
    title: "Pause A Moment",
    description: "The COVID-19 pandemic has taken a toll. Pause a moment to focus on your well-being.",
    image: logo,
    url: window.location.href
  });

  return <MetaContext.Provider value={{ meta: meta, setMeta: setMeta }}>
    {props.children}
  </MetaContext.Provider>
}

export default MetaContextProvider;