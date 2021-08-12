import React, { Component } from 'react'
import Navbar from "../components/Navbar/Navbar";
import draftkitappAPI from '../api/draftkitappAPI.js'
import * as ReactBootStrap from 'react-bootstrap'


class HomePage extends Component {
  state = {
    players: [],
    league: [],
    ADP: [],
  }

  componentDidMount(){
    const id = this.props.match.params.id
    console.log(localStorage.getItem("auth-user"))
    draftkitappAPI.fetchLeagueByID(id,localStorage.getItem("auth-user"))
      .then((APIresponseLeague) => {
        this.setState({
          league: APIresponseLeague
          
        })
        console.log(this.state.league)

      })
    
    
    draftkitappAPI.fetchPlayerProjections()
      .then((APIresponsePlayer) => {
        this.setState({
          players: APIresponsePlayer
          
        })
        console.log(this.state.players)
      })

    draftkitappAPI.fetchPlayerADP()
      .then((APIresponsePlayerADP) => {
        this.setState({
          ADP: APIresponsePlayerADP
          
        })
        console.log(this.state.ADP)
      })
  }

  

  render() {
    return (
      <div>

        <div className="ResearchPage">
          <Navbar />
        </div>

        <div>
        <h1> [League] Draft Plan</h1>
        <ReactBootStrap.Table striped bordered hover>
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
            <tr key = { this.state.league.id }>
              <td>{ this.state.league.id }</td>
              <td>{ this.state.league.name }</td>
              <td>{ this.state.league.draft_type }</td>
              <td>{ this.state.league.number_of_teams }</td>
              <td>{ this.state.league.scoring }</td>
              <td>{ this.state.league.team_composition }</td>
            </tr>
            

          </tbody>  
        </ReactBootStrap.Table>

        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>ADP</th>
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
                <td>{ this.state.ADP.AverageDraftPosition }</td>
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

