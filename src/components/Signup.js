import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Signup.css';

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
    <div className='row'>
        <div className="col-4 offset-4">
            <div className="card">
                 <div className="card-body"> 
                 <h3 className='text-primary my-4 text-center'>Sign up</h3>
                     <form onSubmit={handleSubmit}>

                        <div className="row">
                            <div className="offset-2 col-6 mt-3">
                               <label htmlFor="username" className="form-label">Username</label>
                                <div className="col-12">
                                     <i className="fa-regular fa-user user-icon"></i>
                                     <input type="email" className="form-control text-center input-box" id="username" name="username" placeholder='Enter Your Email' value= {credentials.username} onChange={onChange}/>
                                </div> 
                            </div>
                      </div>
            
                       <div className="row">
                          <div className="offset-2 col-6 mt-3">
                               <label htmlFor="password" className="form-label">Password</label>
                             <div className="col-12">
                                 <i className="fa-solid fa-lock password-icon"></i>
                                 <input type="password" className="form-control text-center input-box" id="password" name="password" placeholder='Enter Password' value={credentials.password} onChange={onChange} minLength={5} required/>
                             </div> 
                           </div>  
                      </div>

                      <div className="row">
                        <div className="offset-2 col-6 mt-3">
                          <div className="col-12">
                              <label htmlFor="name" className="form-label">Name</label>
                              <input type="text" className="form-control text-center input-box" id="name" name="name" placeholder='Enter Your Name' value={credentials.name} onChange={onChange} minLength={3} required/>
                          </div>
                        </div>
                      </div>

                     <div className="row">
                        <div className="col-4 offset-4">
                          <button type="submit" className="btn btn-primary my-3">SIGN UP</button>
                        </div>  
                     </div>
                      
                    </form>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Signup