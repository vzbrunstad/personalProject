import React, { Component } from 'react'
import * as ReactBootStrap from 'react-bootstrap'



class LeagueList extends Component {
  render() {
    return (
      <div className = "some-page-wrapper">
        <div className = "row">
          <div className = "column">
            <div className = "blue-column">
              <ReactBootStrap.Table className =  "blue-column" data={this.props.league} striped bordered hover>
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

                  <tr key = { this.props.league.id }>
                    <td>{ this.props.league.id }</td>
                    <td>{ this.props.league.name }</td>
                    <td>{ this.props.league.draft_type }</td>
                    <td>{ this.props.league.number_of_teams }</td>
                    <td>{ this.props.league.scoring }</td>
                    <td>{ this.props.league.team_composition }</td>
                  </tr>
                  
                </tbody>  
              </ReactBootStrap.Table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LeagueList