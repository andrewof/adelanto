import React from 'react';
import './ClientLayout.scss';

export function ClientLayout({ children }) {
  return (
    <div className="cliente-layout">
      <h2>ClientLayout</h2>

      {children}
    </div>
  )
}
