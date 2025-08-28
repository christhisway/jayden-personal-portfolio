import React from "react";

interface Heading1Props {
  text: string;
}

const Heading1 = (props: Heading1Props) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance m-10">
      {props.text}
    </h1>
  );
};

export default Heading1;
