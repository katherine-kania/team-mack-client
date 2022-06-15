import React from "react";

const foot = {
    padding: '80px 60px',
    background: 'black',
    position: 'absolute',
    bottom: '0',
    width: '100%',
}
  
const Footer = () => {
  return (
    <div style={foot}>
      <h1 style={{ color: "green", 
                   textAlign: "left", 
                   marginTop: "-50px" }}>
        © 2022 Katherine Kania
      </h1>
      
    </div>
  );
};
export default Footer;