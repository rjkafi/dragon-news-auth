import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none p-6">
        <h3 className="text-xl font-semibold text-center">Login your Account</h3>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
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
