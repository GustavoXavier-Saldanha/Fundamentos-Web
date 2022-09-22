import React from "react";
import "./styles.css";
import Card from "@mui/material/Card";

const DataCard = (infos) => {
  // const Itens = () => {
  //   return (
  //     <Card variant="outlined" className="cardP">
  //       <div>
  //         <p>Brasil - {infos.abbreviation}</p>
  //         <div>
  //           <p>População:</p>
  //           <p>{infos.population}</p>
  //         </div>
  //       </div>
  //     </Card>
  //   );
  // };
  console.log("Infos", infos.infos, infos.abbreviation);
  return (
    <Card variant="outlined" className="cardP">
      <div>
        <p>Brasil - {infos.abbreviation}</p>
        <div>
          <p>População:</p>
          <p>{infos.population}</p>
        </div>
      </div>
    </Card>
  );
};
export default DataCard;
