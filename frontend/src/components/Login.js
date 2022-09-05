import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();
    
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async () => {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            navigate("/")
            props.showAlert(`Logged in successfully!    HELLO ${json.name} `, "success")
        } else {
            props.showAlert("Invalid Credentials", "danger")
        }

    }

    return (
        <div>
            <div className='text-center my-4'>
                <h1>react-test</h1>
            </div>

            <div className="container my-5">
            <p className="text-center"><i>Login to continue</i></p>
                <div className="mb-3 ">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={onChange} id="email" name="email" />
                </div>

                <div className="mb-3 ">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} id="password" name="password" />
                </div>
            </div>
            <div className='text-center'>
                <button className='btn btn-primary' onClick={handleSubmit}>Login</button>
            </div>
            <br/>
            <p className='text-center last-para'>Don't have an account? <a href="/signup">SignUp-&gt;</a> </p>
        </div>
    )
}

export default Login