import React from 'react';
import { Navbar } from "../../components/Clientes";
import './ClientLayout.scss';

export function ClientLayout({ children }) {
  return (
    <div className="cliente-layout">
      <div>
        <Navbar/>
      </div>

      { children }
    </div>
  )
}
