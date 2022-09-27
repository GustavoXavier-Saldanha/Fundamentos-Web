import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const SectionCard = ({ infos }) => {
  return (
    <>
      <section className="cardsRedirect">
        <h3>{infos.title}</h3>
        <p className="cardsRedirectTxt">{infos.label}</p>
        <Link to={infos.route} className="cardsRedirectButton">
          Ir para seção
        </Link>
      </section>
    </>
  );
};
export default SectionCard;
