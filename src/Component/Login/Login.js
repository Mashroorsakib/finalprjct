import React from 'react';
import firebase from 'firebase/app';
import firebaseConfig from './firebase.config';
import "firebase/auth"
import { useContext,useState } from 'react';
import { usercontext } from '../../App';
import { useHistory,useLocation } from 'react-router-dom';

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);    
  }
const Login = () => {

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [loggeduser,setloggeduser]=useContext(usercontext);
  const [error,seterror]=useState('')
  const [login,setlogin]=useState('')
  const [password,setpassword]=useState({
    passwordconfirm:''
  })
  const [newuser,setnewuser]=useState(false)


  const handlegooglesign=()=>{
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var {displayName,email} = result.user;
      const user={name:displayName,email:email}
      setloggeduser(user)
      history.replace(from)
      console.log(email)
  
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
  
    });
    }

    return (
        <div className="login-page container ">
        <div className="row align-items-center mx-auto" style={{ width: '500px', height: "100vh" }}>
          <div className="col-md-12 shadow p-5">
        
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="from-group mb-3">
              <button className="btn btn-primary form-control class mt-10" onClick={handlegooglesign}> Google Sign in</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;