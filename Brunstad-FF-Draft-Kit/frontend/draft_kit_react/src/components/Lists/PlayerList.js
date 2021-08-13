import React, { Component } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


class PlayerList extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <div>
              <ReactBootStrap.Table  data = { this.props.players }striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Pos</th>
                    <th>PasY</th>
                    <th>PasTD</th>
                    <th>RuY</th>
                    <th>RuTD</th>
                    <th>RecY</th>
                    <th>RecTD</th>
                    <th>F Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  this.props.players.map(item => (
                    <tr key = { item.PlayerID }>
                      <td>{ item.PlayerID }</td>
                      <td>{ item.Name }</td>
                      <td>{ item.Position }</td>
                      <td>{ item.PassingYards }</td>
                      <td>{ item.PassingTouchdowns }</td>
                      <td>{ item.RushingYards }</td>
                      <td>{ item.RushingTouchdowns }</td>
                      <td>{ item.ReceivingYards }</td>
                      <td>{ item.ReceivingTouchdowns }</td>
                      <td>{ item.FantasyPointsFantasyDraft }</td>
                    </tr>
                  
                  ))
                  }
                </tbody>  
              </ReactBootStrap.Table>
              </div>
          </div>
        </div>
      </div>

    )
  }
}

export default PlayerList