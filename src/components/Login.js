import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'

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

    <div className="row">
        <div className="col-4 offset-4">
        <div className='card'>
        <h3 className='mt-5 text-primary text-center'>Login</h3>
        <div className="card-body">
        <form onSubmit={handleSubmit}>

            <div className="row">
               <div className="offset-2 col-6">
                  <label htmlFor="username" className="form-label">Username</label>
                  <div className="col-12">
                     <i className="fa-regular fa-user user-icon"></i>
                     <input type="email" className="form-control user-input" id="username" name="username" value={credentials.username} onChange={onChange} placeholder='Enter Your Email'/>
                  </div>
               </div>
           </div>

           <div className="row">
               <div className="offset-2 col-6">
                  <label htmlFor="username" className="form-label mt-3">Password</label>
                  <div className="col-12">
                      <i className="fa-solid fa-lock password-icon"></i>
                      <input type="password" className="form-control password-input" id="password" name="password" value={credentials.password} onChange={onChange} placeholder='Enter Password'/>
                  </div> 
               </div>
           </div>

           <div className="row">
            <div className="col-4 offset-4">
             <button type="submit" className="btn btn-primary my-4 align-center">LOGIN</button>
            </div>
           </div>
        </form>
        </div>
       </div>
       </div>
    </div>

    
  )
}

export default Login