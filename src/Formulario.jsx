import React, {Component} from "react";

class Formulario extends Component{
    constructor(props){
        super(props);

        this.state ={
            nombre: "",
            apellido: ""
        }
        this.cambiarNombre = this.cambiarNombre.bind(this);
    }

    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }

    render(){ // imprime el componenete
        return(
            <div id="elemento">
                <h1>Formulario</h1>
                <form action="">
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="nombre"
                    onChange={ this.cambiarNombre } />
                    <label htmlFor="">Apellido</label>
                    <input type="text" name="apellido"
                    onChange={
                        (i) => this.setState({
                            apellido: i.target.value 
                        })
                    } />
                    <input type="submit" value="enviar"/>
                </form>
                <br />
                <br />
                <h3>{`Nombre: ${this.state.nombre}`}</h3>
                <h3>{`Apellido: ${this.state.apellido}`}</h3>
            </div>
        )
    }

    componentDidMount(){
        let elemento = document.getElementById("elemento")
        console.log(elemento)
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState);
        console.log(prevProps);
        console.log("----------------");
    }
}

export default Formulario;

/* Notas
se puede imprimir de dos formas 
1- desde el input se realiza la funcion 
    onChange={
    (i) => this.setState({
    apellido: i.target.value 
    })

2- se realiza la creacion de una funcion para cambiar el valor
    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        })
        y se llama desde el constructor con el metodo bind
               this.cambiarNombre = this.cambiarNombre.bind(this);   */