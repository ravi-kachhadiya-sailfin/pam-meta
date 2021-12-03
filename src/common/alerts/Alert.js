// Wrapper component for the Material UI Alert component. Integrates with the alerts service
// and handles temporary alerts and window scrolling (to reveal alerts at the top of the page body).

import { useEffect, useRef, useState } from "react";
import {
  Collapse as MuiCollapse,
  IconButton as MuiIconButton,
} from "@material-ui/core";
import { Close as MuiCloseIcon } from "@material-ui/icons";
import { Alert as MuiAlert } from "@material-ui/lab";
import { useAlerts } from "common/alerts/alertsService";

export const Alert = () => {
  const [open, setOpen] = useState(true);
  const { alert, clearAlert } = useAlerts();
  const timeout = useRef(null);

  const TIMEOUT = 5000; // Display time (in milliseconds) for a temporary alert

  useEffect(() => {
    if (alert.scrollWindow) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }

    if (alert.isTemporary) {
      timeout.current = setTimeout(() => {
        setOpen(false);
        clearAlert();
      }, TIMEOUT);
    }

    return () => clearTimeout(timeout.current);
  }, [alert.isTemporary, alert.scrollWindow, clearAlert]);

  return (
    <MuiCollapse in={open}>
      <MuiAlert
        severity={alert.type}
        action={
          <MuiIconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
              clearAlert();
            }}
          >
            <MuiCloseIcon fontSize="inherit" />
          </MuiIconButton>
        }
      >
        {alert.message}
      </MuiAlert>
    </MuiCollapse>
  );
};
