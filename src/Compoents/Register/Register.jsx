import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const{ createNewUser ,UpdateUserProfile} = useContext(AuthContext);
    const[user,setUser] =useState([]);
    const[error ,SetError] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        console.log({name,password,photo,email});

        createNewUser(email,password)
        .then((result)=> {
            const  user = result.user;
            setUser(user);
            UpdateUserProfile({displayName:name , photo_url:photo})
            .then(()=>{
              navigate("/");
            })
            .catch(err =>{
              console.log(err);
            })

        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
        })
 
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Your Account</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
             <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" />
          <label className="label">Photo-Url</label>
          <input name='photo' type="text" className="input" placeholder="photo-url" />
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
        <p className='font-bold text-blue-400'>Already have an account ?<Link to ='/auth/login'> Login</Link></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;