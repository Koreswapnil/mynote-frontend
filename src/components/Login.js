import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials]=useState({username:"", password:""})
    let history = useHistory();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch('http://localhost:5000/auth/login', {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({username:credentials.username, password:credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            //redirect and save auth token
            localStorage.setItem('token', json.authtoken);
            history.push("/");
        }else{
            alert("Invalid credentials")
        }
    }

    const onChange=(e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
           <div className="mb-3">
             <label htmlFor="username" className="form-label">Email address</label>
                <input type="email" className="form-control" id="username" name="username" value={credentials.username} onChange={onChange} aria-describedby="emailHelp"/>
             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
           </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    </div>
  )
}

export default Login