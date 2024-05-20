import React from 'react';
import "./AdminLayout.scss"
import { LoginAdmin } from '../../pages/Admin';
import { useAuth } from "../../hooks";

export function AdminLayout({ children }) {
  const { auth } = useAuth();

  if (!auth) return <LoginAdmin/>

  return (
    <div>
      <h2>AdminLayout</h2>

      {children}
    </div>
  )
}
