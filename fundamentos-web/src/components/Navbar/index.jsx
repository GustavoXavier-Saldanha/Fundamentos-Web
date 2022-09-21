import React, { useState } from "react";
import "./styles.css";
import Hamburguer from "../../assets/images/burger_line_list_menu_nav_navigation_option_icon_123231 (1).png";
import xxx from "../../assets/images/xxx.png";

import { Link } from "react-router-dom";
import {
  PeopleAltOutlined,
  ReportOutlined,
  StoreOutlined,
} from "@mui/icons-material";
const NavBar = () => {
  const [navBar, setNavbar] = useState(false);

  const Itens = () => {
    return (
      <>
        <button onClick={() => setNavbar(!navBar)} className="menu hamb-button">
          <div className="menu">
            {navBar ? (
              <div className="imgSizeBox">
                <image className="img-size toggle-x-hover" src={xxx} />
              </div>
            ) : (
              <image className="toggle-ham-hover" src={Hamburguer} />
            )}
          </div>
        </button>
        <div className="nav-logo"></div>
        <nav className={`navbar ${navBar && "opened"}`}>
          <ul onClick={() => setNavbar(!navBar)} className="ul-menu">
            <li className="link-container">
              <Link className="nav-link" to="/usuariosCadastrados">
                <PeopleAltOutlined className="icon-menu icon-black" />
                <p className="nav-text">Usuarios Cadastrados</p>
              </Link>
            </li>
            <li className="link-container">
              <Link className="nav-link" to="/usuariosDenunciados">
                <ReportOutlined className="icon-menu icon-red" />
                <p className="nav-text">Usuarios Denunciados</p>
              </Link>
            </li>
            <li className="link-container">
              <Link className="nav-link" to="/EstabelecimentosCadastrados">
                <StoreOutlined className="icon-menu icon-black" />
                <p className="nav-text">Estabelecimentos cadastrados</p>
              </Link>
            </li>
            <li className="link-container">
              <Link className="nav-link" to="/EstabelecimentosDenunciados">
                <ReportOutlined className="icon-menu icon-red" />
                <p className="nav-text">Estabelecimentos denunciados</p>
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
