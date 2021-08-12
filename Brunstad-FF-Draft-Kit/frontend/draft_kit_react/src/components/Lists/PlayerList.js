import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

class PlayerList extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.players}>
          <TableHeaderColumn isKey dataField='PlayerID'> ID </TableHeaderColumn>
          <TableHeaderColumn dataField='Name'> Name </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default PlayerList