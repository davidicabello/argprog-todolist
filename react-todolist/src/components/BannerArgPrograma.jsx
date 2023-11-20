import arglogo from "../assets/logo.jpg";
import "../stylesheets/BannerArgPrograma.css";

export const BannerArgPrograma = () => {
  return (
    <div className="bannerargprograma-logo-contenedor">
      <img
        src={arglogo}
        alt="Banner Argentina Programa"
        className="bannerargprograma-logo"
      />
    </div>
  );
};
