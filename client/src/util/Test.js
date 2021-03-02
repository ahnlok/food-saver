import React from 'react';

const CredentialsContext = React.createContext({
    id:"",
    password: "",
    username: "",
    setCredential:() => {}
  });

export default CredentialsContext;