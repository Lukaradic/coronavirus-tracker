import React from "react";
import "./home.scss";
import LatestTotal from "../components/latestTotal/LatestTotal";
import LatestDaily from "../components/latestDaily/LatestDaily";
import SearchHome from "../components/searchHome/SearchHome";

export default function Home() {
  return (
    <div id="home">
      <LatestTotal />
      {/* <LatestDaily /> */}
      <SearchHome />
    </div>
  );
}
