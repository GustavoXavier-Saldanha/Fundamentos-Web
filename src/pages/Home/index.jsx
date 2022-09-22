import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataCard from "../../components/dataCard";
const Home = () => {
  const [brazilData, setBrazilData] = useState({});
  const [ukData, setUkData] = useState({});
  const [italiaData, setItaliaData] = useState({});
  const [frData, setFrData] = useState({});
  const [euaData, setEuaData] = useState({});
  const [globalData, setGlobalData] = useState({});

  const [updateData, setUpdateData] = useState("");

  useEffect(() => {
    const buscaData = async () => {
      await axios
        .get(`https://covid-api.mmediagroup.fr/v1/cases`)
        .then((response) => {
          let res = response.data;
          console.log("response", res.Global.All);
          console.log("res", res.France.All);

          setUpdateData(res.Brazil.Acre.updated);
          setBrazilData(res.Brazil.All);
          setUkData(res.Uk.All);
          setItaliaData(res.Italy.All);
          setFrData(res.France.All);
          setGlobalData(res.Global.All);
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
  console.log("globalData", globalData);
  return (
    <div className="container">
      <div className="content">
        <div className="titleContent">
          <h2 className="pageTitle">Painel Coronavírus - Global</h2>
          <p className="pageTitleDate">
            Atualizado em: {updateData ? formatData(updateData) : ""}
          </p>
        </div>
      </div>
      <div className="cardsBody">
        <div className="cardsContainer">
          <DataCard infos={globalData} name={"GLOBAL"} />
          <DataCard infos={brazilData} name={"Brazil"} />
          <DataCard infos={ukData} name={"INGLATERRA"} />
          <DataCard infos={italiaData} name={"ITÁLIA"} />
          <DataCard infos={frData} name={"FRANÇA"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
