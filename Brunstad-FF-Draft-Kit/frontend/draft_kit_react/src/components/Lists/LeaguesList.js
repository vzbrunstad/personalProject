import React, { Component } from 'react'
import * as ReactBootStrap from 'react-bootstrap'



class LeaguesList extends Component {

  render() {
    return (
      <div>
        <ReactBootStrap.Table data={this.props.leagues} striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Draft Type</th>
              <th>Number of Teams</th>
              <th>Scoring</th>
              <th>Team Composition</th>
         
            </tr>
          </thead>
          <tbody>
            {
            this.props.leagues.map(item => (
              <tr key = { item.id }>
                <td>{ item.id }</td>
                <td><a href = {'http://localhost:3000/league/' + item.id}>{ item.name }</a></td>
                <td>{ item.draft_type }</td>
                <td>{ item.number_of_teams}</td>
                <td>{ item.scoring}</td>
                <td>{ item.team_composition}</td>
              </tr>
            
            ))
            }
          

          </tbody>  
        </ReactBootStrap.Table>
      </div>
    )
  }
}

export default LeaguesList