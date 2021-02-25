import React from "react";
import Result from "../result/Result";
import { CountryProps } from "../../utility/TS-helper";

export default function CountryDisplay(props: CountryProps) {
  return (
    <div className="country">
      <Result num={props.confirmed} className="confirmed" />{" "}
      <Result num={props.deaths} className="deaths" />{" "}
      <Result num={props.recovered} className="recovered" />
    </div>
  );
}
