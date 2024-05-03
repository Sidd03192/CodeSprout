'use client'

import React from 'react';
import { Route, Switch} from 'react-router-dom';

const Layout = ({ children }) => {


  return (
    <html>
      <body >


        {children}

      </body>
    </html>
  );
};

export default Layout;