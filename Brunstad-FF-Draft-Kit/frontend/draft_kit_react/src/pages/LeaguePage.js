import React, { Component } from 'react'
import Navbar from "../components/Navbar/Navbar";
import draftkitappAPI from '../api/draftkitappAPI.js'
import LeagueList from '../components/Lists/LeaguelList.js'


class HomePage extends Component {
  state = {
    leagues: []
  }


  componentDidMount(){

    console.log(localStorage.getItem("auth-user"))
    draftkitappAPI.fetchLeagues(localStorage.getItem("auth-user"))
      .then((APIresponse) => {
        this.setState({
          leagues: APIresponse
        })
        // console.log(APIresponse)
        console.log(this.state.leagues)

      }
    )
  }
  
  render() {
    return (
      <div>
        <div className="Homepage">
          <Navbar />
        </div>
        <div>
        <h1> [User Placeholder] All leagues</h1>
        <LeagueList leagues={this.state.leagues} />
      
        </div>
      </div>
    )
  }
}

export default HomePage