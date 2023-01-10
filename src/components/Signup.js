import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Signup = () => {
    const [credentials, setCredentials]=useState({username:"", password:"", name:""})
    let history = useHistory();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {username, password, name} = credentials;
        const response = await fetch('http://localhost:5000/auth/register', {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({username, password, name})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            //redirect and save auth token
            localStorage.setItem('token', json.authtoken);
            history.push("/");
        }
        else{
           
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
                <input type="email" className="form-control" id="username" name="username" value= {credentials.username} onChange={onChange} aria-describedby="emailHelp"/>
             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
           </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} minLength={5} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={onChange} minLength={3} required/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    </div>
  )
}

export default Signup