import { useState } from "react";

export default function ViewCount({initialValue}) {
  /* let viewCount = 0;*/
  let [viewCount, setViewCount] = useState(initialValue); // -> [ variableDeEstado, setterDeLaVariableDeEstado ]

  const stylesViewCount = {
    maxWidth: "360px",
    margin: "15px auto",
    backgroundColor: "#343434",
    textAlign: "center",
    padding: "15px",
    color: "white",
    fontWeight: "700",
    marginTop: "5",
  };

  function handleClick() {
    console.log("clickeado");
    setViewCount(viewCount + 1);
  }

  return (
    <div onClick={handleClick} style={stylesViewCount}>
      Hiciste {viewCount} clicks
    </div>
  );
}