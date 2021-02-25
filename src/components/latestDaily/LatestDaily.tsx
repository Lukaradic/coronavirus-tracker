import React, { useState, useEffect } from "react";
import api from "../../utility/api/api";
import Result from "../result/Result";

interface Data {
  confirmed: number;
  recovered: number;
  critical: number;
  deaths: number;
  lastChange?: string;
  lastUpdate?: string;
}
export default function LatestDaily() {
  const [data, setData] = useState<Data | null>(null);
  function fetchData() {
    api
      .get(`/report/totals?date=${getCurrentDate()}`)
      .then((response) => setData(response[0]));
  }
  function getCurrentDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    const date = yyyy + "-" + mm + "-" + dd;
    return date;
  }

  return (
    <section className="latest-daily section">
      <h4>Latest Daily</h4>
      <button onClick={fetchData}>Get Daily Report</button>
    </section>
  );
}
