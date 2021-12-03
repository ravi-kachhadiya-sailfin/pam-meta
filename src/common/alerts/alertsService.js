// Alerts service for handling alert state management. Exports a provider and a custom hook for
// accessing and updating the alert state. Currently manages a single alert (the latest one).

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

const AlertsContext = createContext();

export const AlertsProvider = ({ children }) => {
  // Alerts context state
  //  exists: true if an alert exists to display
  //  type: the alert type, either "error", "warning", "info", or "success"
  //  message: the alert message to display
  //  isTemporary: true if the alert should be removed after a few seconds (should be set to false for non-error alerts)
  //  scrollWindow: true if the browser window should be scrolled to the top (should be set to false for alerts in dialogs)

  const initialState = useRef({
    exists: false,
    type: null,
    message: null,
    isTemporary: null,
    scrollWindow: null,
  });

  const [state, setState] = useState(initialState.current);

  const setAlert = useCallback(
    (type, message, isTemporary = false, scrollWindow = true) => {
      setState({
        exists: true,
        type,
        message,
        isTemporary,
        scrollWindow,
      });
    },
    []
  );

  const clearAlert = useCallback(() => {
    setState(initialState.current);
  }, []);

  return (
    <AlertsContext.Provider value={{ alert: state, setAlert, clearAlert }}>
      {children}
    </AlertsContext.Provider>
  );
};

// Custom hook
export const useAlerts = () => {
  return useContext(AlertsContext);
};
