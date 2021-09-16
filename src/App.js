import React from 'react';
import {Filtros} from './Components/Filtros/Filtros'
import {ShoppingCart} from './Components/ShoppingCart/ShoppingCart';
import {Produtos} from './Components/Produtos/Produtos'

// import styled from 'styled-components'

// const listaDeProdutos = [
//   {
//     id: 1,
//     nome: 'Viagem a Lua',
//     preco: 3000,
//     quantidade: 3,
//     foto: 'https://picsum.photos/200/200?a=4'
// },
// {
// id: 2,
// nome: 'Viagem a Terra',
// preco: 3000,
// quantidade: 3,
// foto: 'https://picsum.photos/200/200?a=4'
// },
// {
//     id: 3,
//     nome: 'Viagem ao Sol',
//     preco: 3000,
//     quantidade: 3,
//     foto: 'https://picsum.photos/200/200?a=4'
// },
// {
// id: 4,
// nome: 'Viagem ao Lua',
// preco: 3000,
// quantidade: 3,
// foto: 'https://picsum.photos/200/200?a=5'
// },
// {
// id: 5,
// nome: 'Viagem a Plutão',
// preco: 3000,
// quantidade: 3,
// foto: 'https://picsum.photos/200/200?a=4'
// }
// ]




class App extends React.Component {
  state={
    produtoCard:[

        {
            id: 1,
            nome: 'Viagem a Lua',
            preco: 3000,
            quantidade: 3,
            foto: 'https://picsum.photos/200/200?a=4'
    },
    {
      id: 2,
      nome: 'Viagem a Terra',
      preco: 3000,
      quantidade: 3,
      foto: 'https://picsum.photos/200/200?a=4'
    },
   {
            id: 3,
            nome: 'Viagem ao Sol',
            preco: 3000,
            quantidade: 3,
            foto: 'https://picsum.photos/200/200?a=4'
    },
    {
        id: 4,
        nome: 'Viagem ao Lua',
        preco: 3000,
        quantidade: 3,
        foto: 'https://picsum.photos/200/200?a=5'
    },
    {
      id: 5,
      nome: 'Viagem a Plutão',
      preco: 3000,
      quantidade: 3,
      foto: 'https://picsum.photos/200/200?a=4'
    }],
    
    filterMax: '5',
    filterMin: '1',
    filterBusca: 'Buscar Produtos',
    carrinho: []


}

adicionarCarrinho = (id) =>{
    const carrinhoProduto = this.state.produtoCard.find(produtoCard => produtoCard.id === id)

    const arrayDeCarrinho = [...this.state.carrinho, carrinhoProduto];
    this.setState({carrinho: arrayDeCarrinho});
}

adicionarBusca = () =>{

}

onChangeFilterMax (event){
  this.setState({filterMax: event.target.value })
}

onChangeFilterMin (event) {
this.setState({filterMin: event.target.value })
}

onChangeFilterBusca (event){
this.setState({filterBusca: event.target.value })
}

removerProduto(){
  alert("Apaguei")
}

// copiaProdutos = () => {
//   const copiaDosProdutos = this.state.produtoCard.map((produto)=>{
        
//   })
// }


render (){

  
    return(

      <div className= "App">
        
          <Filtros
          filterMax={this.state.filterMax}
          onChangeFilterMax={this.onChangeFilterMax}
          filterMin={this.state.filterMin}
          onChangeFilterMin={this.onChangeFilterMin}
          filterBusca={this.state.filterBusca}
          onChangeFilterBusca={this.onChangeFilterBusca}
          />
          <ShoppingCart 
          
          />
          <Produtos
          produtoCard={this.state.produtoCard}
          />
          
      </div>
    )
}
}
export default App;