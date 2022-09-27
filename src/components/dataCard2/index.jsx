import React from "react";
import "./styles.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const DataCard2 = ({ infos }) => {
  return (
    <>
      <Card
        sx={{
          width: 345,
          backgroundColor: "#094b17",
          margin: "20px",

          "@media (max-width: 420px)": {
            width: `90%`,
          },
          "@media (max-width: 420px)": {
            width: `90%`,
            margin: "0px",
            marginTop: "10px",
            marginBottom: "10px",
          },
        }}
        className="cardP"
      >
        <div className="infoCard">
          <div className="bodyContent">
            <div className="bodyInfo">
              <Typography
                variant="body2"
                color={"#EEEEEE"}
                fontSize={18}
                fontWeight={700}
              >
                Casos confirmados:
              </Typography>
              <Typography
                variant="body2"
                color={"#fff"}
                fontSize={36}
                fontWeight={800}
                marginBottom={2}
              >
                {infos.cases ? infos.cases.toLocaleString("pt-BR") : ""}
              </Typography>

              <Typography
                variant="body2"
                color={"#EEEEEE"}
                fontSize={18}
                fontWeight={700}
              >
                Total de mortes:
              </Typography>
              <Typography
                variant="body2"
                color={"#fff"}
                fontSize={36}
                fontWeight={800}
              >
                {infos.deaths ? infos.deaths.toLocaleString("pt-BR") : ""}
              </Typography>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default DataCard2;
