import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "./Firebse";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./Store/authSlice";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import image from './Components/logo parakkat.png'

function Login() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  //   sign in funtion
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        dispatch(setUser(result.user));
        const user = result.user;
        console.log(result.user);
        navigate("/categories", { replace: true });
      })
      .catch((error) => {
        alert(error.message);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <div>
        <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
          <div class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
            <div class="p-4 py-6 text-white bg-green-600 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
              <div class="my-3 text-4xl font-bold tracking-wider text-center">
              <img className="lg:w-24 w-16 p-2 mx-auto" src={image} alt="" />
                <a href="#">Parakkat Nature Resort</a>
              </div>
              <p class="mt-6 font-normal text-center text-gray md:mt-0">
                Parakkat Nature Resorts is a great option for travellers looking
                out for resort in Munnar. It is located in Pallivasal.This
                Resort stands out as one of the highly recommended resort in
                Munnar and is recommended by 93% of our guests. 
              </p>
            </div>
            <div class="p-5 bg-white md:flex-1">
              <h3 class="my-4 text-2xl font-semibold text-gray-700">
                Account Login
              </h3>

              <div>
                <GoogleLoginButton onClick={handleSignInWithGoogle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
