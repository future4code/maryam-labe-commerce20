import React from 'react';
import {Filtros} from './Components/Filtros/Filtros'
import {ShoppingCart} from './Components/ShoppingCart/ShoppingCart'
import {Produtos} from './Components/Produtos/Produtos'



class App extends React.Component {
  state={
    produtos:[

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


}

adicionarCarrinho = (id) =>{
  
  const adicionarProduto = this.state.produtos.find(produto => produto.id === id)
  if(adicionarProduto) {
    const novaListaCarrinho = this.state.produtos.map(produto => {
      if(id === produto.id) {
        return {
          ...produto,
          quantidade: produto.quantidade + 1
        }
      }
        return produto
    })
       this.setState({adicionarProduto: novaListaCarrinho})

  }


  // const arrayCarrinho = [...this.state.carrinho, adicionarCarrinho + 1]
  // this.setState({carrinho: arrayCarrinho})
  
}


removerCarrinho = (id) =>{
  const removerProduto = this.state.produtos.map((produto) => {
  if(produto.id === id) {
    return {
      ...produto,
      quantidade: produto.quantidade - 1
    }
  }
  return produto
}).filter((produto) => produto.quantidade > 0)

this.setState({produtos: removerProduto})
}

  // const arrayRemover = [...this.state.carrinho, removerCarrinho -1]
  // this.setState({carrinho: arrayRemover })
  


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
            produtos={this.state.produtos} 
            removerCarrinho={this.removerCarrinho}
         
         />
          <Produtos
          produtos={this.state.produtos}
          adicionarCarrinho={this.adicionarCarrinho}
          />
          
      </div>
    )
}
}
export default App;