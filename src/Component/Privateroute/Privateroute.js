import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { usercontext } from '../../App';

const Privateroute = ({children,...rest}) => {
    const [loggeduser,setloggeduser]=useContext(usercontext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
          loggeduser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default Privateroute;
