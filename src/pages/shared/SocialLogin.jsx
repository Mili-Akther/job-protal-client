import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const SocialLogin = () => {
      const {signInWithGoogle}= useContext(AuthContext)
      const handleGoogleSignIn =() =>{
            signInWithGoogle()
            .then(result=>{
                  console.log(result.user);
            })
            .catch(error=>{
                  console.log(error.massage);
            })
      }
      return (
        <div className='m-4 mx-auto'>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} className="btn">
            Google
          </button>
        </div>
      );
};

export default SocialLogin;