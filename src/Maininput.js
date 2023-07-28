import React from "react";

const Maininput = ({ setName }) => {
  return (
    <div>
      <input
        style={{ padding: "10px", fontSize: "20px" }}
        placeholder="input ur name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Maininput;
