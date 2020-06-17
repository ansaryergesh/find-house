import React, {Component} from 'react';
import Register from './auth/Register';
import Login from './auth/Login';
import Home from './Home';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { actions } from 'react-redux-form';
import {registerAccount,userLoginFetch } from '../redux/actionCreators';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = (dispatch) => ({
    registerAccount: (registration) => dispatch(registerAccount(registration)),
    userLoginFetch: (account) => dispatch(userLoginFetch(account)),
    resetFeedbackForm: () => { dispatch(actions.reset('registration'))},
})
class MainComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
       return(
           <div>
                  <Switch>
                            <Route path="/home" component={() => <Home />} />
                            <Route path='/register' component={() => <Register registerAccount={this.props.registerAccount} resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
                            <Route path ='/login' component={()=> <Login userLoginFetch={this.props.userLoginFetch}/>}/>
                            <Redirect to="/home" />
                </Switch>
           </div>
       )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));