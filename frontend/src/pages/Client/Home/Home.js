import React from "react";
import { SectionPrincipal, SectionSecundario,
  Footer
 } from "../../../components/Clientes";
import "./Home.scss";

export function Home() {
  return (
    <div className="home">
      <SectionPrincipal />
      <SectionSecundario />
      <Footer />
    </div>
  )
}
