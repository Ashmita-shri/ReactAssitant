import React from 'react';
import "./DetailsView.css";


function DetailsView({name, link}){

    return (
        <div className = "details-section"style ={{padding: "0.7rem", display: "flex", flexDirection:"column", alignItems:"center" }}>
           <p style = {{fontSize: "1.2rem"}}>{link}</p>
    <p style = {{color: "#696969", padding:"0.5rem 0"}}>To know more about {name}, Visit the Wikipedia page below,</p>
           <a rel="noopener noreferrer" className = "link" style = {{fontSize: "1.5rem", textDecoration: "none"}} href={link} target = "_blank">{name}</a>
        </div>
    )

}

export default DetailsView;