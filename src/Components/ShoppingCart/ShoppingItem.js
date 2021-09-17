import React from 'react'
// import styled from 'styled-components';


export class ShoppingItem extends React.Component {
  render() {
    return <div>
      <p>{this.props.cardItem.quantidade}x</p>
      <p>{this.props.cardItem.nome}</p>
      <button onClick={() => this.props.removerCarrinho(this.props.cardItem.id)}>
        Remover
      </button>
    </div>
  }
}