import React, { Component } from 'react'
import Navbar from "../components/Navbar/Navbar";
import draftkitappAPI from '../api/draftkitappAPI.js'
import PlayerProjectionList from '../components/Lists/PlayerProjectionList.js'


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

  render() {
    return (
      <div>

        <div className="ResearchPage">
          <Navbar />
        </div>

        <div>
        <h1> Player Projections
        </h1>

          <div>
            <PlayerProjectionList players={this.state.players} />
          </div>


        
        </div>
      </div>
    )
  }
}

export default HomePage

