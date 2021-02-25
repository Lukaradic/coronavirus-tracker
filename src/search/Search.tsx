import React, { useState } from "react";
import Form from "../components/form/Form";
import CountryDisplay from "../components/countryDisplay/CountryDisplay";
import api from "../utility/api/api";
import { Data, CountryData, CountryProps } from "../utility/TS-helper";
import { isGetAccessorDeclaration } from "typescript";
//  create type function
//  add return value of interface data

export default function Search() {
  const [data, setData] = useState<CountryData | null>(null);

  function fetchData(term: string) {
    api
      .get(`/country?name=${term}`)
      .then((result) => {
        if (Array.isArray(result) && result.length > 0) {
          setData(result[0]);
        } else {
          setData(null);
        }
      })
      .catch((err) => console.error(err));
  }

  function renderCountry() {
    if (data?.confirmed && data?.deaths && data?.recovered) {
      return (
        <CountryDisplay
          confirmed={data?.confirmed}
          deaths={data?.deaths}
          recovered={data?.recovered}
        />
      );
    }
    return <h1>Hello</h1>;
  }
  return (
    <div>
      <Form fetchData={fetchData} />
      {renderCountry()}
    </div>
  );
}
