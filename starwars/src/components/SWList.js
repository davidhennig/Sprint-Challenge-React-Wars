import React, { useState, useEffect } from "react";
import axios from "axios";
import SWCard from "./SWCard";

export default function SWList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        setList(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div className="SW">
      {list.map(SW => {
        return (
          <SWCard
            key={SW.name}
            gender={SW.gender}
            birth_year={SW.birth_year}
            created={SW.created}
            height={SW.height}
            eye_color={SW.eye_color}
            mass={SW.mass}
          />
        );
      })}
    </div>
  );
}
