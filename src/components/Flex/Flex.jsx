function Flex({ children , title }) {
    const flexStyle = {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    };
  
    return (

    <div>
      <h1 style={{ textAlign: "center", color: "blue" }}>{title}</h1>
      <div style={flexStyle}>{children}</div>
    </div>
    ) 
  }
  
  export default Flex;