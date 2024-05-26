import React from 'react';
import { Navbar, Footer } from "../../components/Clientes";
import './ClientLayout.scss';

export function ClientLayout({ children }) {
  return (
    <div className="cliente-layout">
      <div>
        <Navbar/>
      </div>

      <div className='content'>
        { children }
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}
