import React, { useEffect, useState } from "react";
import "./latestTotal.scss";
import api from "../../utility/api/api";
import Spinner from "../../utility/spinner/Spinner";
import Result from "../result/Result";
import { Data } from "../../utility/TS-helper";

export default function LatestTotal() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);

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
        <Result className="confiarmed" num={data.confirmed} />
        <Result className="recovered" num={data.recovered} />
        <Result className="deaths" num={data.deaths} />
      </div>
    </section>
  );
}
