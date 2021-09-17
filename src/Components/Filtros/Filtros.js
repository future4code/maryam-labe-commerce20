import React from 'react'

export class Filtros extends React.Component {
    render() {

      return <Filtros>

        <h1>Filtros</h1>
          <p>Valor Mínimo:</p>
            <input type="number"
              name={'valor mínimo'}
              onChange = {this.props.filtraMin}
              value = {this.props.filterMin} 
              />
          <p>Valor Máximo:</p>
            <input type="number"
                name={'valor máximo'}
                onChange = {this.props.filtraMax}
                value = {this.props.filterMax} 
                />
          <p>Busca por nome:</p>
              <input name={'busca por nome'}
                onChange = {this.props.filtraNome}
                value = {this.props.filterBusca} 
              /> 
              
    </Filtros>
}
}

export default Filtros