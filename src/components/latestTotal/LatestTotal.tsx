import React, { useEffect, useState } from "react";
import "./latestTotal.scss";
import api from "../../utility/api/api";
import Spinner from "../../utility/spinner/Spinner";

interface Data {
  confirmed: number;
  recovered: number;
  critical: number;
  deaths: number;
  lastChange?: string;
  lastUpdate?: string;
}
export default function LatestTotal() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);

  function numberFormat(num: number): string {
    return num
      .toString()
      .split(/(?=(?:\d{3})+(?:\.|$))/g)
      .join(" ");
  }
  function fetchData() {
    setLoading(true);
    api.get("/totals").then((result) => {
      setData(result[0]);
      setLoading(false);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="LatestTotal section">
        <Spinner />
      </section>
    );
  }
  if (!data) {
    return <section className="LatestTotal section">Can't load data</section>;
  }
  return (
    <section className="latestTotal section">
      <h2 className="latestTotal-title">Total Cases</h2>
      <div className="wrapper">
        <div className="confirmed">
          <h4 className="confirmed-title title">Confirmed:</h4>
          <span className="confirmed-number number">
            {numberFormat(data.confirmed)}
          </span>
        </div>
        <div className="recovered">
          <h4 className="recovered-title title">Recovered:</h4>
          <span className="recovered-number number">
            {numberFormat(data.recovered)}
          </span>
        </div>
        <div className="deaths">
          <h4 className="deaths-title title">Deaths:</h4>
          <span className="deaths-number number">
            {numberFormat(data.deaths)}
          </span>
        </div>
      </div>
    </section>
  );
}
