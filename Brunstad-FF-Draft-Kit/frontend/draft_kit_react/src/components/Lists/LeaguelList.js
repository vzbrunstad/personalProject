import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

class LeagueList extends Component {

  render() {
    return (
      <div>
        <BootstrapTable data={this.props.leagues}>
          <TableHeaderColumn isKey dataField='id'> ID </TableHeaderColumn>
          <TableHeaderColumn dataField='name'> Name </TableHeaderColumn>
          <TableHeaderColumn dataField='draft_type'> Draft Type </TableHeaderColumn>
          <TableHeaderColumn dataField='number_of_teams'> League Size </TableHeaderColumn>
          <TableHeaderColumn dataField='scoring'> Scoring</TableHeaderColumn>
          <TableHeaderColumn dataField='team_composition'> Team Composition </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default LeagueList