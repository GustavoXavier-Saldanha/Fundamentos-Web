import React from "react";
import "./styles.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const DataCard = ({ infos }) => {
  return (
    <>
      <Card
        sx={{
          width: 345,
          backgroundColor: "rgb(29, 165, 132) ",
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
                Casos recuperados:
              </Typography>
              <Typography
                variant="body2"
                color={"#fff"}
                fontSize={36}
                fontWeight={800}
                marginBottom={2}
              >
                {infos.recovered ? infos.recovered.toLocaleString("pt-BR") : ""}
              </Typography>

              <Typography
                variant="body2"
                color={"#EEEEEE"}
                fontSize={18}
                fontWeight={700}
              >
                Testes de COVID-19:
              </Typography>
              <Typography
                variant="body2"
                color={"#fff"}
                fontSize={36}
                fontWeight={800}
              >
                {infos.tests ? infos.tests.toLocaleString("pt-BR") : ""}
              </Typography>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default DataCard;
