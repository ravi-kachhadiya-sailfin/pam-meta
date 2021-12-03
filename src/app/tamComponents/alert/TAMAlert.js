import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';
import './TAMAlert.css';

const TAMAlert = ({ kind, message, className }) => {
  return (
    <Alert className={className}
      severity={kind}
      style={{
        marginBottom: '1rem',
        marginTop: '2rem',
      }}
    >
      <label className="alert-message" style={{ whiteSpace: 'pre-line' }}>{message}</label>
    </Alert>
  );
};

TAMAlert.propTypes = {
  kind: PropTypes.oneOfType(['success', 'error', 'info']),
  message: PropTypes.string,
};

export default TAMAlert;
