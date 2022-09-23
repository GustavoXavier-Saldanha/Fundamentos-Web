import React from "react";
import "./styles.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const EstadoSelect = ({ setBrazilEstadosData, braziEstadoslData }) => {
  const handleChange = (event) => {
    console.log(event.target.value);
    setBrazilEstadosData(event.target.value);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          value={braziEstadoslData}
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
          <MenuItem value={"Mato Grosso do Sul"}>Mato Grosso do Sul</MenuItem>
          <MenuItem value={"Minas Gerais"}>Minas Gerais</MenuItem>
          <MenuItem value={"Para"}>Pará</MenuItem>
          <MenuItem value={"Paraiba"}>Paraíba</MenuItem>
          <MenuItem value={"Parana"}>Paraná</MenuItem>
          <MenuItem value={"Pernambuco"}>Pernambuco</MenuItem>
          <MenuItem value={"Piaui"}>Piauí</MenuItem>
          <MenuItem value={"Rio de Janeiro"}>Rio de Janeiro</MenuItem>
          <MenuItem value={"Rio Grande do Norte"}>Rio Grande do Norte</MenuItem>
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
    </>
  );
};
export default EstadoSelect;
