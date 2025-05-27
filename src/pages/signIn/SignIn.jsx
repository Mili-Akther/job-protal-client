import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import signInLottieData from '../../assets/lottie/sign-in.json'
import AuthContext from '../../context/AuthContext';
import SocialLogin from '../shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignIn = () => {
      const {signInUser} = useContext(AuthContext)
      const location = useLocation();
      const navigate = useNavigate();
      console.log('in signIn page' ,location);
      const from = location.state || '/';


      const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser (email, password)
        .then(result =>{
            console.log('sign in', result.user.email);
            const user = {email: email}
            axios.post(
              "http://localhost:5000/jwt", user
            ).then(data=>{
              console.log(data);
            })
            // navigate(from);
        })
        .catch(error => {
            console.log(error);
        })
        
      };
      return (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left w-92">
              <Lottie animationData={signInLottieData}></Lottie>
            </div>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <h1 className="ml-8 mt-4 text-5xl font-bold">Login now!</h1>
              <form onSubmit={handleSignIn}>
                <div className="card-body">
                  <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input"
                      placeholder="Email"
                    />
                    <label className="label">Password</label>
                    <input
                      name="password"
                      type="password"
                      className="input"
                      placeholder="Password"
                    />
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn btn-neutral mt-4">Login</button>
                  </fieldset>
                </div>
              </form>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      );
};

export default SignIn;