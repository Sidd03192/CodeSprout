"use client"
import "../styles/globals.css"

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const RootLayout = ({ children }) => {


  return (
    <html>
      <body>
        <div className="main ">
          <div className="gradient" />
        </div>
        <main className='app'>
          {/* Gets Children from the page file. ( displays whatever u want) */}
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
