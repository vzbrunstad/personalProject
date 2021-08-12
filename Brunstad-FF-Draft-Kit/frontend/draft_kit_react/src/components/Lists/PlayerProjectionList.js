import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import 'bootstrap/dist/css/bootstrap.min.css';

class PlayerProjectionList extends Component {
  render() {
      
    return (
      <div>
        <BootstrapTable data={this.props.players} striped={true} hover={true} size="sm">
          <TableHeaderColumn isKey={true} dataField='PlayerID'> ID </TableHeaderColumn> 
          <TableHeaderColumn dataField='Name' > Name </TableHeaderColumn>
          <TableHeaderColumn dataField='Position'> Pos </TableHeaderColumn>
          <TableHeaderColumn dataField='PassingYards'> PasY </TableHeaderColumn>
          <TableHeaderColumn dataField='PassingTouchdowns'> PasTD </TableHeaderColumn>
          <TableHeaderColumn dataField='RushingYards'> RuY </TableHeaderColumn>
          <TableHeaderColumn dataField='RushingTouchdowns'> RuTD </TableHeaderColumn>
          <TableHeaderColumn dataField='ReceivingYards'> RecY </TableHeaderColumn>
          <TableHeaderColumn dataField='ReceivingTouchdowns'> RecTD </TableHeaderColumn>
          <TableHeaderColumn dataField='FantasyPointsFantasyDraft'> F Pts </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default PlayerProjectionList
