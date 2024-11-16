import { useContext, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const {createNewUser,setUser,updateUserProfile}=useContext(AuthContext);
    const [ error,setError]=useState({});
    const navigate=useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form= new FormData(e.target);
        const name=form.get("name");
        if(name.length <3){
            setError({...error, name:'must be 5 more character'})
        }
        const email=form.get("email");
        const photoURL=form.get("photoURL");
        const password=form.get("password");
       
        createNewUser( email,password)
        .then(result =>{
            const user=result.user;
            setUser(user)
            // console.log(user)
            updateUserProfile({displayName:name,photoURL:photoURL})
            .then(()=>{
              navigate('/')
                
            })
            .catch((error)=>{
                console.log(error)
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            
          })
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none p-6">
              <h3 className="text-xl font-semibold text-center">Register your Account</h3>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input 
                name="name"
                type="text" placeholder="name" className="input input-bordered" required />
              </div>
              {
               error.name && (
                <label className="label">
                <span className="label-text text-red-500">{error.name}</span>
              </label>
            )
              }
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input 
                name="photoURL"
                type="text" placeholder="photo URL" className="input input-bordered" required />
              </div>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6 w-full">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className=" font-semibold">Already Have An Account ? <span className="text-red-300"><Link to='/auth/login'>Login</Link></span></p>
          </div>
        </div>
      </div>
    );
};

export default Register;