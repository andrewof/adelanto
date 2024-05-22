import React from 'react';
import { Navbar } from "../../components/Admin"
import { LoginAdmin } from '../../pages/Admin';
import { useAuth } from "../../hooks";
import "./AdminLayout.scss";

export function AdminLayout({ children }) {
  const { auth } = useAuth();

  if (!auth) return <LoginAdmin/>

  return (
    <div className="admin-layout">
      <div className="admin-layout-navbar">
        <Navbar />
      </div>

      {children}
    </div>
  )
}
