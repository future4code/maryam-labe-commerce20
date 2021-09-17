import React from 'react';
import styled from 'styled-components'

const CardProduto = styled.div`
    border: 1px solid black;
    img: width: 60px;
    button: width: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px;

`
export class Produtos extends React.Component{

    render(){

        const produto = this.props.produtoCard.map((produto => {

        return <div key={produto.id}>
                <img src={produto.foto} />
                <h5>{produto.nome}</h5>
                <p>{produto.preco}</p>
                <p>{produto.quantidade}</p>
                <button>Adicionar Produto</button>
                </div>
        } ) )
        
        return (
            <CardProduto>
                {produto}
            </CardProduto>
        )
        }
    }

export default Produtos