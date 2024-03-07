import React from 'react';
import '@/assets/styles/globals.css';
import NavBar from '@/components/NavBar';

export const metadata = {
    title: 'PropertyPulse | Find The Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, find properties'
};

const MainLayout = ({children}) => {999
  return (
    <html lang='en'>
        <body>
            <NavBar/>
            <main>{children}</main>
        </body>
    </html>
  )
};

export default MainLayout;