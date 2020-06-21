import React from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
// import withAuth from '../hocs/withAuth'

const Home = ({ avatar, username, bio }) => (
  <h1>
      Home
  </h1>
)

// const mapStateToProps = (reduxStoreState) => {
//   return {
//     avatar: reduxStoreState.usersReducer.user.avatar,
//     username: reduxStoreState.usersReducer.user.username,
//     bio: reduxStoreState.usersReducer.user.bio
//   }
// }

const mapStateToProps = ({

})

// const connectedToReduxHOC = connect(mapStateToProps)
// const connectedProfile = connectedToReduxHOC(Profile)
//
// const withAuthProfile = withAuth(connectedProfile)
//
// export default withAuthProfile

// export default withAuth(connect(mapStateToProps)(Home))
export default Home;