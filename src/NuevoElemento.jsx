import React from "react";

let Estudiante = {
    nombre: "maria",
    edad: 23
}

var color = "azul";

const NuevoElemento = (props) => (
    <div className="container">
        <h3>Estudiante</h3>
        <h4>{ props.nombre }</h4>
        <p>Edad: { Estudiante.edad } </p>
        <span>{ color }</span>
    </div>
)

export default NuevoElemento;




