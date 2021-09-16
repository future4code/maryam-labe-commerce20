import React from 'react';
import styled from 'styled-components'


const Filtragem = styled.div`
   margin-top: 10px;
   border: 1px solid black;
   width: 20vw;
   height: 90vh;
   font-family: Gill Sans Extrabold, sans-serif;

`
const Inputs = styled.div`
    display: flex;
    flex-direction:column;
    width: 15vw;
`

export class Filtros extends React.Component{



    render(){


        return(
            <Filtragem>
                <h1>Filtros</h1>
            <Inputs>
                <p>Valor Mínimo</p>
               <input
               text= "Number"
               value={this.props.filterMin}
               onChange={this.props.onChangeFilterMin}
               />
            </Inputs>
            <Inputs>
                <p>Valor Máximo</p>
               <input
               text= "Number"
               value={this.props.filterMax}
               onChange={this.props.onChangeFilterMax}
               />
               </Inputs>
               <Inputs>
                 <p>Busca Por Nome</p>
               <input
               text= "Number"
               value={this.props.filterBusca}
               onChange={this.props.onChangeFilterBusca}
               />
               </Inputs>
            
            </Filtragem>
        )
    }
}
