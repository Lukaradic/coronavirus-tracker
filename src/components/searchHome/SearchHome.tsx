import React from "react";
import { Link } from "react-router-dom";

export default function SearchHome() {
  return (
    <section className="searchHome section">
      <Link to="/search">Search By Country</Link>
    </section>
  );
}
