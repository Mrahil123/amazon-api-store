import React, { useEffect, useState } from "react";
import axios from "../axios";

import { API_KEY } from "../constanse/const";

import "./style.css";
import logo from "../logo.svg";

function Widget({ search, isSmall, title }) {
  const [apidata, setapiData] = useState([]);
  useEffect(() => {
    axios
      .get(`search/${search}?api_key=${API_KEY}`)
      .then((response) => {
        setapiData(response.data.results);
        console.log("done fetch data");
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  return (
    <div className="continer">
      <h3>{title}</h3>
      <div className="producs">
        {apidata.map((data) => {
          return (
            <div>
              <h4>{data.name.substring(0, 10)}</h4>
              <img
                className={isSmall ? "imgsmall" : "productD"}
                src={data.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Widget;
