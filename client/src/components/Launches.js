import React, { Component, Fragment } from 'react';
import LaunchItem from './LaunchItem'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import MissionKey from './MissionKey'

const LAUNCHES_QUERY = gql`
query LaunchesQuery {
    launches {
        mission_name
        flight_number
        launch_date_local
        launch_success
    }
}
`

export class Launches extends Component {
  render() {
    return (
      <div className="container">
      <h4 className="display-4.my-3">Launches</h4> 
      <MissionKey />
    
      <Query query={LAUNCHES_QUERY}>
      
      {({ loading, error, data }) => {
              if(loading) return <h6>Loading...</h6>
              if(error) console.log(error)
              return <Fragment>
              {data.launches.map(launch => (
               <LaunchItem key={launch.flight_number} launch={launch} />
                  ))}

              </Fragment>
              
          }}
      </Query>      
      </div>
    )
  }
}

export default Launches