
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { userLogin,setUser} =useContext(AuthContext);
    const [error,SetError] = useState({});
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        
        e.preventDefault();
        const form = new FormData(e.target);
        
        const email = form.get("email");
        
        const password = form.get("password");
        console.log({password,email});

        userLogin(email,password)
        .then((result)=>{
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state:"/");
        })
        .catch((error)=>{
          SetError({...error , login:error.code})
        })
    };
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
       Please login with Email & password
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          {
            error.login && <label className='label text-sm text-red-500'>{error.login}</label>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        <p className='text-center font-semibold text-blue-400'>
          Do not Have An Account ? <Link to='/auth/register' className='text-red-500'>Register</Link>
        </p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;