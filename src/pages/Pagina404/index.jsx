import React from "react";
import "./styles.css";

import { Warning, ArrowForward } from "@mui/icons-material";

const Pagina404 = () => {
  return (
    <div className="notFound">
      <div>
        <div className="warning404">
          <h3 className="warning404Txt">404</h3>
        </div>

        <div className="warningMsg">
          <Warning className="warningIcon" />
          <h3 className="warningText">Página não encontrada</h3>
          <Warning className="warningIcon" />
        </div>
        <div className="warningMsg2">
          <p className="warningText2">Tente ir por outro caminho</p>
          <ArrowForward className="arrowIcon" />
        </div>
      </div>
    </div>
  );
};

export default Pagina404;
