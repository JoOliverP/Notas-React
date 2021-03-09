import React, { Component } from 'react';
import "./estilo.css";
class ListaDeCategorias extends Component{
      constructor(){
        super();
        this.state = {categorias:[]};
        this._categorias = this._novasCategorias.bind(this);
      }
      componentDidMount(){
        this.props.categorias.inscrever( this._categorias);
      }
      componentWillMount(){
        this.props.categorias.desinscrever( this._categorias);
      }
      _novasCategorias(categorias){
        this.setState({...this.state,categorias})
      }
    _handleEventoInput(event){
        if (event.key === "Enter") {
           let valorCategoria = event.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }
    render(){
        return(
            <section className="lista-categorias">
            <ul className="lista-categorias_lista">      
            {this.state.categorias.map((categoria,index)=>
            {
                 return <li key={index} className="lista-categorias_item">{categoria}</li> 
            })}   
            </ul>
            <input
              type="text"
              className="lista-categorias_input"
              placeholder="Adicionar Categoria"
              onKeyUp={this._handleEventoInput.bind(this)}
            />
          </section>
        );
    }
}

export default ListaDeCategorias;