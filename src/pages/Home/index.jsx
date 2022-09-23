import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataCard from "../../components/dataCard";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Home = () => {
  const [brazilData, setBrazilData] = useState({});
  const [braziEstados, setBrazilEstados] = useState({});
  const [brazilStateData, setBrazilStateData] = useState({});

  const [updateData, setUpdateData] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setBrazilEstados(event.target.value);
  };

  useEffect(() => {
    const buscaData = async () => {
      await axios
        .get(`https://covid-api.mmediagroup.fr/v1/cases?country=Brazil`)
        .then((response) => {
          let res = response.data;
          console.log("RES", res);
          setUpdateData(res.Acre.updated);
          setBrazilData(res.All);
        })
        .catch((error) => {
          console.log("teste", error);
        });
    };
    // setBrazilStateData(() => {
    //   brazilData.
    // });

    buscaData();
  }, [braziEstados]);
  console.log(brazilStateData);

  const formatData = (data) => {
    let hour = data.slice(11, 16);
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

    return `${dt}/${month}/${year} ${hour}`;
  };
  return (
    <div className="container">
      <div className="content">
        <div className="titleContent">
          <h1 className="pageTitle">Painel Coronavírus - Brasil</h1>
          <p className="pageTitleDate">
            Atualizado em: {updateData ? formatData(updateData) : ""}
          </p>
        </div>
      </div>
      <div className="cardsBody">
        <div className="cardsContainer">
          <DataCard infos={brazilData} />
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
              Extenção:
            </Typography>
            <Typography
              variant="body2"
              color={"#000"}
              fontSize={36}
              fontWeight={800}
            >
              {brazilData.sq_km_area
                ? `${brazilData.sq_km_area.toLocaleString("pt-BR")}m`
                : ""}
            </Typography>
          </div>
        </div>
        <div className="underbody">
          <h3>Selecione um estado para fazer a consulta:</h3>
          <FormControl className="underbodySelect">
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Estados"
              value={braziEstados}
              onChange={handleChange}
            >
              <MenuItem value={"Acre"}>Acre</MenuItem>
              <MenuItem value={"Alagoas"}>Alagoas</MenuItem>
              <MenuItem value={"Amapa"}>Amapá</MenuItem>
              <MenuItem value={"Amazonas"}>Amazonas</MenuItem>
              <MenuItem value={"Bahia"}>Bahia</MenuItem>
              <MenuItem value={"Ceara"}>Ceará</MenuItem>
              <MenuItem value={"Espírito Santo"}>Espírito Santo</MenuItem>
              <MenuItem value={"Goias"}>Goiás</MenuItem>
              <MenuItem value={"Maranhao"}>Maranhão</MenuItem>
              <MenuItem value={"Mato Grosso"}>Mato Grosso</MenuItem>
              <MenuItem value={"Mato Grosso do Sul"}>
                Mato Grosso do Sul
              </MenuItem>
              <MenuItem value={"Minas Gerais"}>Minas Gerais</MenuItem>
              <MenuItem value={"Para"}>Pará</MenuItem>
              <MenuItem value={"Paraiba"}>Paraíba</MenuItem>
              <MenuItem value={"Parana"}>Paraná</MenuItem>
              <MenuItem value={"Pernambuco"}>Pernambuco</MenuItem>
              <MenuItem value={"Piaui"}>Piauí</MenuItem>
              <MenuItem value={"Rio de Janeiro"}>Rio de Janeiro</MenuItem>
              <MenuItem value={"Rio Grande do Norte"}>
                Rio Grande do Norte
              </MenuItem>
              <MenuItem value={"Rio Grande do Sul"}>Rio Grande do Sul</MenuItem>
              <MenuItem value={"Rondonia"}>Rondônia</MenuItem>
              <MenuItem value={"Roraima"}>Roraima</MenuItem>
              <MenuItem value={"Santa Catarina"}>Santa Catarina</MenuItem>
              <MenuItem value={"Sao Paulo"}>São Paulo</MenuItem>
              <MenuItem value={"Sergipe"}>Sergipe</MenuItem>
              <MenuItem value={"Tocantins"}>Tocantins</MenuItem>
              <MenuItem value={"Distrito Federal"}>Santa Catarina</MenuItem>
            </Select>
          </FormControl>
          <DataCard infos={brazilData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
