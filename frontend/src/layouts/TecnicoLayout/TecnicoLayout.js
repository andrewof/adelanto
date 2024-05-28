import React from 'react';
import { Navbar } from "../../components/Tecnico"
import { useAuth } from "../../hooks";
import "./TecnicoLayout.scss";

export function TecnicoLayout({ children }) {
  const { auth } = useAuth();

  console.log(auth)

  if (!auth || !auth.me || !auth.me.profesion || !auth.me.experiencia) return

  return (
    <div className="tecnico-layout">
      <div className="tecnico-layout-navbar">
        <Navbar />
      </div>

      { children }
    </div>
  )
}
