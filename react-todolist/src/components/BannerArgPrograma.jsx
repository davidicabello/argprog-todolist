import arglogo from "../assets/logo.jpg";
import "../stylesheets/BannerArgPrograma.css";

const BannerArgPrograma = () => {
  return (
    <div className="bannerargprograma-container">
      <img
        src={arglogo}
        alt="Banner Argentina Programa"
        className="bannerargprograma-logo"
      />
    </div>
  );
};

export default BannerArgPrograma;
