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
            

     
        
        const produto = this.props.produtos
              return <div>
          <img src={produto.foto} alt='imagens de Planetas'/>
          <div>
            <p>{produto.nome}</p>
            <p>R${produto.preco},00</p>
            <button onClick={() => this.props.adicionarCarrinho(produto.id)}></button>
              Adicionar ao carrinho
            
          </div>
        </div>
        
          
    }
}