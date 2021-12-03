// Users service for the "users/me" endpoint, handling API integration and user state management.
// Exports a provider and a custom hook for accessing information about the current user.

import {createContext, useContext, useEffect, useState} from "react";
 import axios from "axios";
import {useAlerts} from "common";

const UsersContext = createContext();

export const UsersProvider = ({children}) => {
    console.log(children)
    const [currentUser, setCurrentUser] = useState({
        permissions: {},
        roles: [],
        isLoaded: false,
    });
    const {setAlert} = useAlerts();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios({
                    url: "/users/me",
                });

                setCurrentUser({
                    permissions: {},
                    ...response.data,
                    isLoaded: true,
                });
            } catch (error) {
                // Rules for handling API errors in all services:
                // 1. For all errors, an error message must be displayed to the user. The following rules cover what error message
                //    to display and where to display the error message.
                // 2. In the error object, error.message contains a default error message that's already set for the current error.
                //    If there is a story requirement to display a custom error message for the current error, then the service must
                //    replace the default error message with the custom error message.
                // 3. To determine if the current error is one the story requires to be custom, the service should inspect the combination
                //    of error.status and error.code in the error object.
                // 4. If the current error is required to be custom, the service should lookup the custom error message in translation.json
                //    and if needed format it with information from error.response.data in the error object.
                // 5. If the default error message has been replaced by a custom error message, the service must set the custom error
                //    message to display in either the Alert component or a form field error, depending on the story requirements.
                // 6. If the default error message has not been replaced, the service must set the default error message to display
                //    in the Alert component.
                // IMPORTANT: This default setAlert must be called if no custom error message has been set.
                setAlert("error", error.message);
            }
        })();
    }, [setAlert]);

    return (
        <UsersContext.Provider value={{currentUser}}>
            {children}
        </UsersContext.Provider>
    );
};

// Custom hook
export const useUsers = () => {
    return useContext(UsersContext);
};
