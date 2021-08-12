


const fetchLeagues = async (token) => {
  return await fetch(`http://localhost:8000/draft_kit_app/league/`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`,
    }
  }).then((response) => response.json())
  
}

const fetchLeagueByID = async (leagueID, token) => {
  console.log(leagueID, token)
  
  return await fetch(`http://localhost:8000/draft_kit_app/league/${leagueID}/`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`,
    }
  }).then((response) => response.json())
  
}

// const fetchLeagueByID = async (leagueID, token) => {
//   console.log(leagueID, token)
//   return await fetch(`http://localhost:8000/draft_kit_app/league/${leagueID}`, {
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `JWT ${token}`,
//     }
//   }).then((response) => response.json())
  
// }  


const fetchPlayers = () => {
  return fetch("https://api.sportsdata.io/v3/nfl/stats/json/PlayerGameStatsByWeek/2020REG/1?key=9887c231b1c14ecba6bac306bcf256cf")
    .then((response) => response.json())
}    

const fetchPlayerProjections = () => {
  return fetch("https://api.sportsdata.io/v3/nfl/projections/json/PlayerSeasonProjectionStats/2021REG?key=9887c231b1c14ecba6bac306bcf256cf")
    .then((response) => response.json())
}    

const fetchPlayerADP = () => {
  return fetch("https://api.sportsdata.io/v3/nfl/stats/json/FantasyPlayers?key=9887c231b1c14ecba6bac306bcf256cf")
    .then((response) => response.json())
}    



const exportedObject = {
   
  fetchPlayers,
  fetchLeagues,
  fetchLeagueByID,
  fetchPlayerProjections,
  fetchPlayerADP,
};

export default exportedObject;
    
