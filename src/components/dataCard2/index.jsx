import React from "react";
import "./styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

const DataCard2 = ({ infos }) => {
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
        <CardActions>
          {/* <Button
            size="small"
            target="_blank"
            href="https://www.google.com/search?sa=X&cs=0&sxsrf=ALiCzsYVGz7A-xWKUns4rYnKu_4WTSJJwg:1663872521033&q=Brasil&stick=H4sIAAAAAAAAAONgFuLQz9U3ME82zVECswxN04q0hJzz80oy81LzSkLynfNL80qKKhexsjkVJRZn5gAAgy0ONjMAAAA&ved=2ahUKEwip78SUiKn6AhXWt5UCHUCDA7sQxA16BAhJEAs&biw=1440&bih=789&dpr=1"
          >
            Saiba mais
          </Button> */}
        </CardActions>
      </Card>
    </>
  );
};
export default DataCard2;
