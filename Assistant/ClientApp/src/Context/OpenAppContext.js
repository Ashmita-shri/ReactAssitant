import React, { useState } from 'react';

export const Context = React.createContext();

export const OpenAppContext = ({ children }) => {
  const [page, setPage] = useState('');
  const [value,setValue] = useState('');

  return (
    <Context.Provider value={[page, setPage,value, setValue]}>
      {children}
    </Context.Provider>
  );
};
