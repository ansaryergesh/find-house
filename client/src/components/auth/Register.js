import React, {Component} from 'react';
import { Control, LocalForm, Errors, Form } from 'react-redux-form';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
const required = (val) => val && val.length;
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Register extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.registerAccount(values);
        this.props.resetFeedbackForm();
    }

    render () {
        
        return(
            <div className='container'>
                <div className='row col-12'>
                    <h3 className='text-center'>Registration</h3>
                    <Form model='registration' onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className='form-group'>
                            <Label htmlFor='name' md={2}>name:</Label>
                            <Col md={10}>
                                <Control.text model='.name' id='name' name='name' placeholder='Ansar'
                                    className='form-control'
                                    validators = {{
                                        required,
                                    }}  
                                />
                                <Errors  className='text-danger' model='.name' show='touched' 
                                    messages={{
                                        required: 'Required!',
                                        }}
                            />
                            </Col>
                        </Row>
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
                                    <Button type="submit" color="primary">Register</Button>
                                </Col>
                            </Row>
                    </Form>
                </div>
               
            </div>
        )
    }
}

export default Register;