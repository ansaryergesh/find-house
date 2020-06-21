import React, {Component} from 'react';
import Register from './auth/Register';
import Login from './auth/loginForm';
import Home from './Home';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { actions } from 'react-redux-form';
import {registerAccount,loginUser } from '../redux/actionCreators';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = (dispatch) => ({
    registerAccount: (registration) => dispatch(registerAccount(registration)),
    loginUser: (login) => dispatch(loginUser(login)),
    resetLog: () => {dispatch(actions.reset('login'))},
    resetForm: () => { dispatch(actions.reset('registration'))},
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
                            <Route path='/register' component={() => <Register registerAccount={this.props.registerAccount} resetForm={this.props.resetForm}/>}/>
                            <Route path ='/login' component={()=> <Login loginUser={this.props.loginUser} resetLog={this.props.resetLog}/>}/>
                            <Redirect to="/home" />
                </Switch>
           </div>
       )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));