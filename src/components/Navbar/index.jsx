import React, { useState } from "react";
import "./styles.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BiotechIcon from "@mui/icons-material/Biotech";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import ArticleIcon from "@mui/icons-material/Article";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [navBar, setNavbar] = useState(false);

  const Itens = () => {
    return (
      <>
        <button onClick={() => setNavbar(!navBar)} className="menu hamb-button">
          <div className="menu">
            {navBar ? (
              <div className="imgSizeBox">
                <CloseIcon className=" toggle-x-hover" sx={{ fontSize: 50 }} />
              </div>
            ) : (
              <MenuIcon className="toggle-ham-hover" sx={{ fontSize: 50 }} />
            )}
          </div>
        </button>
        <div className="nav-logo">
          <h2 className="navBarTxt1">SAÚDE</h2>
          <div className="navBar1" />
          <div className="navBar2" />
          <h2 className="navBarTxt2">CORONAVÍRUS</h2>
        </div>
        <nav className={`navbar ${navBar && "opened"}`}>
          <ul onClick={() => setNavbar(!navBar)} className="ul-menu">
            <li className="link-container">
              <Link className="nav-link" to="/">
                <HomeIcon className="icon-menu icon-color" />
                <p className="nav-text">Home</p>
              </Link>
            </li>
            <li className="link-container">
              <Link className="nav-link" to="/estatisticas">
                <BiotechIcon className="icon-menu icon-color" />
                <p className="nav-text">Estatísticas</p>
              </Link>
            </li>
            <li className="link-container">
              <Link className="nav-link" to="/sobre">
                <ArticleIcon className="icon-menu icon-color" />
                <p className="nav-text">Sobre</p>
              </Link>
            </li>

            <li className="link-container">
              <Link className="nav-link" to="/informacoes">
                <InfoIcon className="icon-menu icon-color" />
                <p className="nav-text">Informações</p>
              </Link>
            </li>
            <li className="link-container">
              <Link className="nav-link" to="/cuidados">
                <MedicalInformationIcon className="icon-menu icon-color" />
                <p className="nav-text">Cuidados</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`${navBar && "navBarOverlay"}`}
          onClick={() => setNavbar(!navBar)}
        ></div>
      </>
    );
  };

  return <div className="nabvar">{Itens()}</div>;
};
export default NavBar;
