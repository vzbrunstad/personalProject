import React, { Component } from 'react'
import * as ReactBootStrap from 'react-bootstrap'

class ADPList extends Component {

  render() {
    return (
      <div>
        <ReactBootStrap.Table data={this.props.ADP} striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ADP</th>
              <th>POS</th>
              <th>Name</th>


         
            </tr>
          </thead>
          <tbody>
            {
            this.props.ADP.map(item => (
              <tr key = { item.PlayerID }>
                <td>{ item.AverageDraftPosition }</td>
                <td>{ item.Position }</td>
                <td>{ item.Name }</td>


              </tr>
            
            ))
            }
          

          </tbody>  
        </ReactBootStrap.Table>
      </div>
    )
  }
}


export default ADPList