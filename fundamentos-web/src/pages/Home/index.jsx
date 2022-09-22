import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataCard from "../../components/dataCard";
const Home = () => {
  const [brazilData, setBrazilData] = useState("");
  const [updateData, setUpdateData] = useState("");

  useEffect(() => {
    const buscaData = async () => {
      await axios
        .get(`https://covid-api.mmediagroup.fr/v1/cases?country=Brazil`)
        .then((response) => {
          console.log(response.data.All, response.data);
          let res = response.data;
          setUpdateData(res.Acre.updated);
          setBrazilData(res.All);
        })
        .catch((error) => {
          console.log("teste", error);
        });
    };
    buscaData();
  }, []);

  const formatData = (data) => {
    const date = new Date(data);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }

    return `${dt}/${month}/${year}`;
  };

  return (
    <div className="container">
      <div className="content">
        <div className="titleContent">
          <h2 className="pageTitle">Painel sobre o Coronavírus</h2>
          <p className="pageSubTitle">Dados sobre o Brasil</p>
          <p className="pageTitleDate">
            Atualizado em: {updateData ? formatData(updateData) : ""}
          </p>
        </div>
      </div>
      <div>
        <div>
          <DataCard infos={brazilData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
