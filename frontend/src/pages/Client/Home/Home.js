import React from "react";
import { SectionPrincipal, SectionSecundario } from "../../../components/Clientes";
import "./Home.scss";

export function Home() {
  return (
    <div className="home">
      <SectionPrincipal />
      <SectionSecundario />
    </div>
  )
}
