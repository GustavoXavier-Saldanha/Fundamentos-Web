import React from "react";
import "./styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const DataCard = ({ infos, name }) => {
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

  return (
    <>
      <Card
        sx={{
          width: 345,
          backgroundColor: "rgb(29, 165, 132) ",
          margin: "20px",
        }}
        className="cardP"
      >
        <div className="infoCard">
          <Typography gutterBottom variant="h4" component="div" color={"#fff"}>
            {name === "GLOBAL"
              ? name
              : `${name} - ${infos.abbreviation ? infos.abbreviation : ""}`}
          </Typography>
          <div className="bodyContent">
            <div>
              <Typography
                variant="body2"
                color={"#fff"}
                fontSize={18}
                fontWeight={700}
              >
                População:
              </Typography>
              <Typography
                variant="body2"
                color={"#fff"}
                fontSize={22}
                marginBottom={2}
              >
                {infos.population
                  ? infos.population.toLocaleString("pt-BR")
                  : ""}
              </Typography>
              <Typography
                variant="body2"
                color={"#fff"}
                fontSize={18}
                fontWeight={700}
              >
                Extenção:
              </Typography>
              <Typography variant="body2" color={"#fff"} fontSize={22}>
                {infos.sq_km_area
                  ? `${infos.sq_km_area.toLocaleString("pt-BR")}m`
                  : ""}
              </Typography>
            </div>
            <div>
              <Typography
                variant="body2"
                color={"#fff"}
                fontSize={18}
                fontWeight={700}
              >
                Casos confirmados:
              </Typography>
              <Typography
                variant="body2"
                color={"#fff"}
                fontSize={22}
                marginBottom={2}
              >
                {infos.confirmed ? infos.confirmed.toLocaleString("pt-BR") : ""}
              </Typography>

              <Typography
                variant="body2"
                color={"#fff"}
                fontSize={18}
                fontWeight={700}
              >
                Total de mortes:
              </Typography>
              <Typography variant="body2" color={"#fff"} fontSize={22}>
                {infos.deaths ? infos.deaths.toLocaleString("pt-BR") : ""}
              </Typography>
            </div>
          </div>
        </div>
        <CardActions>
          <Button
            size="small"
            target="_blank"
            href="https://www.google.com/search?sa=X&cs=0&sxsrf=ALiCzsYVGz7A-xWKUns4rYnKu_4WTSJJwg:1663872521033&q=Brasil&stick=H4sIAAAAAAAAAONgFuLQz9U3ME82zVECswxN04q0hJzz80oy81LzSkLynfNL80qKKhexsjkVJRZn5gAAgy0ONjMAAAA&ved=2ahUKEwip78SUiKn6AhXWt5UCHUCDA7sQxA16BAhJEAs&biw=1440&bih=789&dpr=1"
          >
            Saiba mais
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default DataCard;
