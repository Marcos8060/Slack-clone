import React from 'react'
import './Login.css'
import {Button} from '@mui/material'
import { auth, provider } from './firebase'
import {useStateValue} from './stateProvider'
import {actionTypes} from './reducer'

function Login() {
    const [state, dispatch] = useStateValue();
    
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch(error => {
            alert(error.message)
        })
    }
    return (
        <div className='login'>
            <div className="login_container">
                 <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dx45ddcla8rzhqyaj2a5" alt="" />
                 <h1>Sign in to Code with Marcos</h1>
                 <p>codewithmarcos.slack.com</p>
                 <Button onClick={signIn}>Sign in with Google</Button>
            </div>                                                         
        </div>
    )
}

export default Login
