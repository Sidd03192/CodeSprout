"use client"
import "../../../styles/globals.css"
import "../auth.css"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const LoginLayout = ({ children }) => {


  return (
    <html>
      <body >


        {children}

      </body>
    </html>
  );
};

export default LoginLayout;
