import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Carousel } from '../shared/Carousel'

const SignIn = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onSignIn = (event) => {
        event.preventDefault()
        console.log('the props', props)
        const { msgAlert, setUser } = props

        const credentials = { email, password }

        signIn(credentials)
            .then((res) => setUser(res.data.user))
            .then(() =>
                msgAlert({
                    heading: 'Sign In Success',
                    message: messages.signInSuccess,
                    variant: 'success',
                })
            )
            .then(() => navigate('/search'))
            .catch((error) => {
                setEmail('')
                setPassword('')
                msgAlert({
                    heading: 'Sign In Failed with error: ' + error.message,
                    message: messages.signInFailure,
                    variant: 'danger',
                })
            })
    }

    return (
        <>
            <div className='background row'>
                <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                    <h3 className='m-2 landingMessage'>Sign in to find your favorite music or something...</h3>
                    <Form onSubmit={onSignIn}>
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
                        <Button type='submit' className='btn'>
                            Submit
                        </Button>
                    </Form>
                        <h3 className='m-2 landingMessage'>
                            Not a member? Please, sign up  
                            <Link className='landingLink' to='/sign-up'>  HERE</Link> !
                        </h3>  
                </div>
            </div>
            <Carousel/>
        </>
    )
}

export default SignIn
