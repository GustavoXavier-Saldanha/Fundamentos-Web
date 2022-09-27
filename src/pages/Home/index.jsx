import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataCard from "../../components/dataCard";
import DataCard2 from "../../components/dataCard2";
import Typography from "@mui/material/Typography";

const Stats = () => {
  const [brazilData, setBrazilData] = useState({});

  const [updateData, setUpdateData] = useState("");

  useEffect(() => {
    const buscaData = async () => {
      await axios
        .get(`https://disease.sh/v3/covid-19/countries/brazil`)
        .then((response) => {
          let res = response.data;
          console.log("RES", res);
          setBrazilData(response.data);
        })
        .catch((error) => {
          console.log("teste", error);
        });
    };
    buscaData();
  }, []);

  return (
    <div className="container">
      <div className="content">
        <div className="titleContent">
          <h1 className="pageTitle">Painel Coronavírus - Brasil</h1>
          <p className="pageTitleDate">Dados atualizados</p>
        </div>
      </div>
      <main className="cardsBody">
        <div className="cardsContainer">
          <div className="cardsBox">
            <DataCard2 infos={brazilData} />
            <div className="bodyHome">
              <Typography
                variant="body2"
                color={"#000"}
                fontSize={18}
                fontWeight={700}
              >
                População:
              </Typography>
              <Typography
                variant="body2"
                color={"#000"}
                fontSize={36}
                fontWeight={800}
                marginBottom={2}
              >
                {brazilData.population
                  ? brazilData.population.toLocaleString("pt-BR")
                  : ""}
              </Typography>
              <Typography
                variant="body2"
                color={"#000"}
                fontSize={18}
                fontWeight={700}
              >
                Mortes a cada 1 milhão de pessoas:
              </Typography>
              <Typography
                variant="body2"
                color={"#000"}
                fontSize={36}
                fontWeight={800}
              >
                {brazilData.deathsPerOneMillion
                  ? `${brazilData.deathsPerOneMillion.toLocaleString("pt-BR")}`
                  : ""}
                <small style={{ fontSize: "12px", fontWeight: 600 }}>
                  {" "}
                  por milhão
                </small>
              </Typography>
            </div>
          </div>
          <div className="cardsBox">
            <DataCard infos={brazilData} />
            <div className="bodyHome">
              <Typography
                variant="body2"
                color={"#000"}
                fontSize={18}
                fontWeight={700}
              >
                Casos críticos:
              </Typography>
              <Typography
                variant="body2"
                color={"#000"}
                fontSize={36}
                fontWeight={800}
                marginBottom={2}
              >
                {brazilData.critical
                  ? brazilData.critical.toLocaleString("pt-BR")
                  : ""}
              </Typography>
              <Typography
                variant="body2"
                color={"#000"}
                fontSize={18}
                fontWeight={700}
              >
                Recuperados por milhão:
              </Typography>
              <Typography
                variant="body2"
                color={"#000"}
                fontSize={36}
                fontWeight={800}
              >
                {brazilData.recoveredPerOneMillion
                  ? `${brazilData.recoveredPerOneMillion.toLocaleString(
                      "pt-BR"
                    )}`
                  : ""}
                <small style={{ fontSize: "12px", fontWeight: 600 }}>
                  {" "}
                  por milhão
                </small>
              </Typography>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Stats;
