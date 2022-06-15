import React from "react";

const foot = {
    padding: '10px 20px',
    background: 'rgb(50, 50, 80)',
    position: 'absolute',
    bottom: '0',
    width: '100%',
}
  
const Footer = () => {
  return (
    <div style={foot}>
      <p style={{ color: "grey", 
                   textAlign: "left", 
                   marginTop: "auto",
                   fontFamily: 'Catamaran'}}>
        © 2022 Something Musical
      </p>
   
    </div>
  );
};
export default Footer;