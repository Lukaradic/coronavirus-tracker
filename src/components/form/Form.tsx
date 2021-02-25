import React, { useState } from "react";
import "./form.scss";

interface Props {
  fetchData(term: string): void;
}
const Form: React.FC<Props> = (props) => {
  const [term, setTerm] = useState("");
  //  napravi search
  //  save value in state
  //  on submit trigger fetch

  function onSubmit(e: any): void {
    e.preventDefault();
    console.log(typeof e);
    props.fetchData(term);
    setTerm("");
  }
  return (
    <form onSubmit={onSubmit} id="form">
      <label htmlFor="country">
        <input
          type="text"
          id="country"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </label>
    </form>
  );
};

export default Form;
