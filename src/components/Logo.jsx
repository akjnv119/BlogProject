
import React from "react";
import logo from "./Logo.png";

function Logo({width = '100px'}) {
    return(
        <img 
      src= {logo}
      alt="BlogSe Logo"
      style={{ width, height: "auto" }}
    />
    )
}

export default Logo