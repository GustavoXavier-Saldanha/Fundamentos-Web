import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);
const Stats = () => {
  const [brazilDataPie, setBrazilDataPie] = useState({});

  const [dataPie, setDataPie] = useState({
    labels: ["Casos", "Mortes", "Recuperados"],
    datasets: [
      {
        label: "COVID-19 Infos",
        data: [0, 0, 0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const buscaDataPie = async () => {
      await axios
        .get(`https://disease.sh/v3/covid-19/countries/brazil`)
        .then((response) => {
          let res = response.data;

          setBrazilDataPie(res);
        })
        .catch((error) => {
          console.log("teste", error);
        });
    };

    buscaDataPie();
  }, []);

  useEffect(() => {
    setDataPie({
      labels: ["Casos", "Mortes", "Recuperados"],
      datasets: [
        {
          label: "Covid-19 Infos",
          data: [
            brazilDataPie.cases ? brazilDataPie.cases : 0,
            brazilDataPie.deaths ? brazilDataPie.deaths : 0,
            brazilDataPie.recovered ? brazilDataPie.recovered : 0,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [brazilDataPie]);

  const optionsPie = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Dados sobre COVID-19 no Brasil",
      },
    },
  };

  return (
    <div className="container">
      <div className="content">
        <div className="titleContent">
          <h1 className="pageTitle">Painel Coronavírus - Brasil</h1>
          <p className="pageTitleDate">Estatísticas</p>
        </div>
      </div>
      <div className="statsContainerPie">
        <p>
          O gráfico a seguir representa a relação entre os casos de COVID-19, as
          pessoas que conseguiram se recuperar do vírus e as mortes causadas
          pelo mesmo. Todas as informações contidas no gráfico são obtidas
          exclusivamente no Brasil.
        </p>
        <div className="statsContentPie">
          <Pie data={dataPie} options={optionsPie} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
