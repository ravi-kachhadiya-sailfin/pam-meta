import React from 'react';
import {  CircularProgress } from '@material-ui/core';
import "./Loader.css"

const Loader = () => {
  return <div className="custom-loader"><CircularProgress /></div>;
}

export default Loader;