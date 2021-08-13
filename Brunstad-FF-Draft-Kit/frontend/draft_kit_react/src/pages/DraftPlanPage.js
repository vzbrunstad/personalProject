import React, { Component } from 'react'
import Navbar from "../components/Navbar/Navbar";
import draftkitappAPI from '../api/draftkitappAPI.js'
import ADPList from '../components/Lists/ADPList.js'
import LeagueList from '../components/Lists/LeagueList.js'
import PickList from '../components/Lists/PickList.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"
import "./styles.css"



class DraftPlanPage extends Component {
  state = {
    players: [],
    league: [],
    ADP: [],
  }

  componentDidMount(){
    const id = this.props.match.params.id
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

  savePicks() {
    console.log("hello")
  }

  

  render() {
    return (
          
      <div className = "container">
        <Navbar /> 

        <div>
        <h1> [League] Draft Plan</h1>
        </div>

        <div className = "row">
          <div>
            <LeagueList league={this.state.league} />
          </div>
        </div>


        <div className = "row"> 

          <div className = "col">
            <button onClick={this.savePicks}>Update Rankings</button>
            <div className = "color1">
              <ADPList ADP={this.state.ADP} />
            </div>
          </div>

          <div className = "col">
            <button onClick={this.savePicks}>Save Picks</button>
            <div className = "color1">
              <PickList />
            </div>
          </div>

          <div className="col">
            <div className = "color2">
              3 of 3
            </div>
          </div>
        </div>
            
      </div>
  




    )
  }
}

export default DraftPlanPage

