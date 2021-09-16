import React from 'react';
import styled from 'styled-components'


const CartShopping = styled.div`
   margin-top: 10px;
   border: 1px solid black;
   width: 20vw;
   height: 90vh;
   font-family: Gill Sans Extrabold, sans-serif;
   
`
// const ValorTotal = styled.p`
//         margin-top: 5em;
// ` 
    
const Button = styled.button`
    margin-left: 10em;
    margin-top: 5em;
`


export class ShoppingCart extends React.Component{

    render() {
            return(
             
            <CartShopping>

            <h1>Carrinho</h1>
            {/* <ValorTotal>Valor Total: R${this.valorDaCompra()},00</ValorTotal> */}
            <Button onClick={this.props.removerCarrinho}>Remove Produto</Button>
            </CartShopping>
            
            
        )
    }
}
