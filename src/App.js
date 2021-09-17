import React from 'react';
import Filtros from './Components/Filtros/Filtros'
import {ShoppingCart} from './Components/ShoppingCart/ShoppingCart';
import {Produtos} from './Components/Produtos/Produtos'
import styled from 'styled-components'

const ContainerInfo = styled.div `
display:grid;
grid-template-columns: 1fr 3fr 1fr;
padding: 10px;
gap: 8px;
`

const ContainerFiltro = styled.div `
    padding: 8px;
    border: 1px solid black;
    font-family: Gill Sans Extrabold, sans-serif;
`


class App extends React.Component {

  state = {
    produtoCard :
      [
        {
            id: 1,
            nome: 'Viagem a Lua',
            preco: 45000,
            quantidade: 3,
            foto: 'https://picsum.photos/200/200?a=4'
    },
    {
      id: 2,
      nome: 'Viagem a Terra',
      preco: 1000,
      quantidade: 3,
      foto: 'https://picsum.photos/200/200?a=4'
    },
  {
            id: 3,
            nome: 'Viagem ao Sol',
            preco: 2800,
            quantidade: 3,
            foto: 'https://picsum.photos/200/200?a=4'
    },
    {
        id: 4,
        nome: 'Viagem a Lua',
        preco: 34000,
        quantidade: 3,
        foto: 'https://picsum.photos/200/200?a=5'
    },
    {
      id: 5,
      nome: 'Viagem a Plutão',
      preco: 67000,
      quantidade: 3,
      foto: 'https://picsum.photos/200/200?a=4'
    }
  ],
    filterMax: '',
    filterMin: '',
    filterBusca: '',
    carrinho: []


}

onChangeFiltraMin = (event) => {
  this.setState ({filterMin: event.target.value})
}

onChangeFiltraMax = (event) => {
  this.setState ({filterMax: event.target.value})
}

onChangefiltraNome = (event) => {
  this.setState ({filterBusca: event.target.value})
}

adicionarCarrinho = (id) =>{
    const carrinhoProduto = this.state.produtoCard.find(produtoCard => produtoCard.id === id)

    const arrayDeCarrinho = [...this.state.carrinho, carrinhoProduto];
    this.setState({carrinho: arrayDeCarrinho});
}

adicionarBusca = () =>{

}

removerProduto(){
  alert("Apaguei")
}


render (){

    return(

      <ContainerInfo>
        
        <ContainerFiltro>
        <h1>Filtros</h1>
          <p>Valor Mínimo:</p>
            <input type="number"
              name={'valor mínimo'}
              onChange = {this.onChangefiltraMin}
              value = {this.state.filterMin} 
              />
          <p>Valor Máximo:</p>
            <input type="number"
                name={'valor máximo'}
                onChange = {this.onChangefiltraMax}
                value = {this.state.filterMax} 
                />
          <p>Busca por nome:</p>
              <input name={'busca por nome'}
                onChange = {this.onChangefiltraNome}
                value = {this.state.filterBusca} 
              /> 
              </ContainerFiltro>

  
          <Produtos produtoCard = {
            this.state.produtoCard
            .filter((produto => {
              return produto.nome.toLowerCase().includes(this.state.filterBusca.toLowerCase())
              }))
            .filter((produto => { 
                return this.state.filterMin === "" || produto.preco >= this.state.filterMin
              }))
            .filter((produto => { 
                return this.state.filterMax === "" || produto.preco <= this.state.filterMax
              })) 
          }
          />

          <ShoppingCart 
          
          />
        
          
      </ContainerInfo>
    )
}
}
export default App;




// filterMax={this.state.filterMax}
          // onChangeFilterMax={this.onChangeFilterMax}
          // filterMin={this.state.filterMin}
          // onChangeFilterMin={this.onChangeFilterMin}
          // filterBusca={this.state.filterBusca}
          // onChangeFilterBusca={this.onChangeFilterBusca}