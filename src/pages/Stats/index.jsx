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
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);
const Stats = () => {
  const [brazilData, setBrazilData] = useState({});
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
    const buscaData = async () => {
      await axios
        .get(`https://covid-api.mmediagroup.fr/v1/cases?country=Brazil`)
        .then((response) => {
          let res = response.data;
          console.log("RES", res);

          setBrazilData(res);
        })
        .catch((error) => {
          console.log("teste", error);
        });
    };

    buscaData();
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
            brazilDataPie.cases ? brazilDataPie.cases : 2,
            brazilDataPie.deaths ? brazilDataPie.deaths : 3,
            brazilDataPie.recovered ? brazilDataPie.recovered : 4,
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

  console.log("TRANSFORM", Object.values(brazilData));

  const objectArray = Object.entries(brazilData);

  objectArray.forEach(([key, value]) => {
    console.log(key); // 'one'
    console.log(value.confirmed); // 1
  });

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: objectArray.forEach(([key, value]) => {
  //         return key; // 1
  //       }),
  //       // data: labels.map(() =>
  //       //   objectArray
  //       //     .forEach(([key, value]) => {
  //       //       console.log(key); // 'one'
  //       //       return value.confirmed; // 1
  //       //     })
  //       //     .datatype.number({ min: 0, max: 40000 })
  //       // ),
  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     },
  //     // {
  //     //   label: "Dataset 2",
  //     //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //     //   backgroundColor: "rgba(53, 162, 235, 0.5)",
  //     // },
  //   ],
  // };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Número de confirmados por estado",
      },
    },
  };

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
          <p className="pageTitleDate"></p>
        </div>
      </div>
      <div className="statsContainerPie">
        <Pie data={dataPie} options={optionsPie} />
      </div>
      <div className="statsContainer">
        {/* <Bar options={options} data={data} /> */}
      </div>
    </div>
  );
};

export default Stats;
