import React, {Component} from 'react';
import { Control, LocalForm, Errors, Form } from 'react-redux-form';
import { withRouter, Redirect } from 'react-router';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
const required = (val) => val && val.length;
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class loginForm extends Component {
    state = { email: '', password: '' }
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.loginUser({email: 'yergeshovansar@gmail.com', password: 'password'});
        // this.props.loginUser({email: this.state.email, password: this.state.password})
        console.log(values);
        this.props.resetLog();
    }

    render () {
        return this.props.loggedIn ? (
            <Redirect to="/home" />
          ) : 
        (
            <div className='container'>
                <div className='row col-12'>
                    <h3 className='text-center'>Login</h3>
                    <Form model='login' onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className='form-group'>
                                <Label htmlFor='email' md={2}>Email:</Label>
                                <Col md={10}>
                                    <Control.text model='.email' id='email' name='email' placeholder='example@example.com'
                                        className='form-control'
                                        validators = {{
                                            required, 
                                            validEmail,
                                        }}  
                                    />
                                    <Errors  className='text-danger' model='.email' show='touched' 
                                        messages={{
                                            required: 'Required!',
                                            validEmail: ' Invalid email address!'
                                         }}
                                />
                                </Col>
                        </Row>

                        <Row className='form-group'>
                                <Label htmlFor='password' md={2}>Password:</Label>
                                <Col md={10}>
                                    <Control.text type='password' model='.password' id='password' name='password'
                                        className='form-control'
                                        validators = {{
                                            required, 
                                        }}
                                    />
                                    <Errors  className='text-danger' model='.email' show='touched' 
                                        messages={{
                                            required: 'Required!',
                                         }}
                                />
                                </Col>
                        </Row>
                        <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">Login</Button>
                                </Col>
                            </Row>
                    </Form>
                </div>
               
            </div>
        )
    }
}

export default loginForm;