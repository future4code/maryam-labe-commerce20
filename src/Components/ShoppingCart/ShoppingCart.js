import React from 'react'
import { ShoppingItem } from './ShoppingItem'
// import styled from 'styled-components';


export class ShoppingCart extends React.Component {
  valorTotal = () => {
    let valorProduto = 0

    for(let produto of this.props.produtos) {
      valorProduto += produto.price * produto.quantidade
    }

    return valorProduto
  }

  render() {
      
    return <div>
      <h3>Carrinho:</h3>
      <div>
        {this.props.produtos.map((produto) => {
          return <ShoppingItem 
                    cardItem={produto} 
                    removerCarrinho={this.props.removerCarrinho}
                  />
        })}
      </div>
      <p>Valor total: R${this.valorTotal()},00</p>
    </div>
  }
}
