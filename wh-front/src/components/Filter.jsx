import { React, useState } from "react";
import { useAsyncDebounce } from "react-table";
import { Label, Input } from "reactstrap";
import filterDark from "../assets/filter-icon-dark.png";
// Style
import "../styles/employees.css";

//Component FILTER qui va permettre d'éffectuer une recherche
//dans ma table entière (nom, adresse, département, etc)
export function GlobalFilter({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = useState(globalFilter);

  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="search-input">
      <Label></Label>
      <img
        className="filter-icon"
        src={filterDark}
        alt="Search employees icon"
      />
      <Input
        className="search-employee"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Search"
      />
    </div>
  );
}
