import React from 'react';
import { Navbar } from "../../components/Admin"
import { LoginAdmin, HomeAdmin } from '../../pages/Admin';
import { useAuth } from "../../hooks";
import "./AdminLayout.scss";

export function AdminLayout({ children }) {
  const { auth } = useAuth();

  if (!auth || !auth.me || !auth.me.is_staff) return <LoginAdmin />

  return (
    <div className="admin-layout">
      <div className="admin-layout-navbar">
        <Navbar />
      </div>

      <div className="body">
        { children }
      </div>
    </div>
  )
}
