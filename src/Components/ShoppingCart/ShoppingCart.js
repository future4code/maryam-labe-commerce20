import React from 'react';
import styled from 'styled-components'


const CartShopping = styled.div`
    padding: 8px;
    border: 1px solid black;
    font-family: Gill Sans Extrabold, sans-serif;
   
`
const Button = styled.button`
    margin-left: 10em;
    margin-top: 5em;
`
const ValorTotal = styled.p`
        margin-top: 5em;
` 
    
export class ShoppingCart extends React.Component{
 


    render() {
    

        return(
            <div>
            <CartShopping>
            <h1>Carrinho</h1>
            <Button> Remover Produto</Button>
            <ValorTotal>Valor total:</ValorTotal>
            </CartShopping>
            </div>
        )
    };
}
