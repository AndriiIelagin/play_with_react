import React from 'react';

// Default value is used when there is no provider provided to the context consumer
const UserContext = React.createContext('Default Value');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext }