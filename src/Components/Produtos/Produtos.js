import React from 'react';
import styled from 'styled-components'

const CardProduto = styled.div`
   display:grid;
   grid-template-columns: repeat(4, 1fr);
   border: 1px solid black;
   width: 20vw;


   img{
       width: 60px;
   }

   button{
    width: 80px;
   }

`


export class Produtos extends React.Component{
    render(){

        const produtoId = this.props.produtoCard.map((produto)=>{
            return <CardProduto>
                <img src={produto.foto}/>
                <h5>{produto.nome}</h5>
                <p>{produto.preco}</p>
                <p>{produto.quantidade}</p>
                <button>Adicionar Produto</button>
            </CardProduto>
        })
        

        return (
            <CardProduto>
                 {produtoId}
                 
            </CardProduto>
        )
    }
}