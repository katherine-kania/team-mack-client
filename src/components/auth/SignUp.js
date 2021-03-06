import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { signUp, signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Carousel } from '../shared/Carousel'


const SignUp = (props) => {   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const navigate = useNavigate()

	const onSignUp = (event) => {
		event.preventDefault()

		const { msgAlert, setUser } = props

        const credentials = {email, password, passwordConfirmation}

		signUp(credentials)
			.then(() => signIn(credentials))
			.then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: 'Sign Up Success',
					message: messages.signUpSuccess,
					variant: 'success',
				})
			)
			.then(() => navigate('/'))
			.catch((error) => {
                setEmail('')
                setPassword('')
                setPasswordConfirmation('')
				msgAlert({
					heading: 'Sign Up Failed with error: ' + error.message,
					message: messages.signUpFailure,
					variant: 'danger',
				})
			})
	}


    return (
        <>
            <div className='background row'>
                <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                <h3 className='m-2 landingMessage'>Sign up to find your favorite music or something...</h3>
                    <Form onSubmit={onSignUp}>
                        <Form.Group controlId='email'>
                            <Form.Label className='formText'>Email address</Form.Label>
                            <Form.Control
                                className='input'
                                required
                                type='email'
                                name='email'
                                value={email}
                                placeholder='Enter email'
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='password'>
                            <Form.Label className='formText'>Password</Form.Label>
                            <Form.Control
                                className='input'
                                required
                                name='password'
                                value={password}
                                type='password'
                                placeholder='Password'
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='passwordConfirmation'>
                            <Form.Label className='formText'>Password Confirmation</Form.Label>
                            <Form.Control
                                className='input'
                                required
                                name='passwordConfirmation'
                                value={passwordConfirmation}
                                type='password'
                                placeholder='Confirm Password'
                                onChange={e => setPasswordConfirmation(e.target.value)}
                            />
                        </Form.Group>
                        <Button type='submit' className='btn'>
                            SIGN ME UP
                        </Button>
                    </Form>
                    <h3 className='m-2 landingMessage'>
                        Already a member? Please, sign in  
                        <Link className='landingLink' to='/sign-in'> HERE</Link> !
                    </h3>    
                </div>
            </div>
            <Carousel/>
        </>
    )

}

export default SignUp