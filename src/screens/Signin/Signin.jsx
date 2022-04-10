import React from 'react'
import { signInWithGooglePopup } from '../../utils/firebase/FireBase.Utils'

const Signin = () => {


    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Signin with google</button>
        </div>
    )
}

export default Signin