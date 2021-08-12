import React, { Component } from 'react'
import Navbar from "../components/Navbar/Navbar";
import draftkitappAPI from '../api/draftkitappAPI.js'
import PlayerProjectionList from '../components/Lists/PlayerProjectionList.js'
import * as ReactBootStrap from 'react-bootstrap'

class HomePage extends Component {
  state = {
    players: []
  }

  componentDidMount(){
    draftkitappAPI.fetchPlayerProjections()
      .then((APIresponse) => {
        this.setState({
          players: APIresponse
        })
        console.log(this.state.players)
      }
    )
  }

  updatePlayerStats() {
    let updatedPlayerStats = this.state.players.map((player, index) => {
      return ( 
        <li key={`${player.PlayerID}`}> 
          {
            // PlayerID: `${player.PlayerID}`,
            // Name: `${player.Name}`,
            // Position: `${player.Name}`,
          }
        </li>
      )
    })
    // console.log(updatedPlayerStats)
  }

  render() {
    return (
      <div>

        <div className="ResearchPage">
          <Navbar />
        </div>

        <div>
        <h1> Player Projectionsasdgafg
        </h1>

          {/* <div>
            <PlayerProjectionList players={"hello"} />
          </div> */}

          {/* _________________________ */}
          <ReactBootStrap.Table striped bordered hover>
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
              this.state.players.map(item => (
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
    )
  }
}

export default HomePage

