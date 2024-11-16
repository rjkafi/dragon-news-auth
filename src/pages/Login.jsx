import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
    const {UserLogin,setUser}=useContext(AuthContext);
    const [error,setError]=useState({})
    const navigate=useNavigate();
    const location=useLocation();
    console.log(location)
    const handleToLogin = (e) =>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;

        UserLogin(email,password)
        .then(result =>{
            const user=result.user
            setUser(user);
            navigate(location?.state ? location.state: '/')

        })
        .catch((err) => {
            setError({...error,login:err.code})
          });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none p-6">
        <h3 className="text-xl font-semibold text-center">Login your Account</h3>
      <form onSubmit={handleToLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
          name="email"
          type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          name="password"
          type="password" placeholder="password" className="input input-bordered" required />
          {
            error.login && (
                <label className="label text-red-600">
               { error.login}
              </label>
            )
          }
          
        </div>
        <div className="form-control mt-6 w-full">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className=" font-semibold">Dont’t Have An Account ? <span className="text-red-300"><Link to='/auth/register'>Register</Link></span></p>
    </div>
  </div>
</div>
    );
};

export default Login;
