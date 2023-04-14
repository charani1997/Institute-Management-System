import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {Component, useEffect} from "react";
import {Link} from 'react-router-dom';

function SignIn() {
    useEffect(()=>{
        document.title='WISDOM | Sign In'
    });

   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/student/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message == "Email not exits") 
             {
               alert("Email not exits");
             } 
             else if(res.data.message == "Login Success")
             { 
                
                navigate('/');
             } 
              else 
             { 
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }

 
         catch (err) {
          alert(err);
        }
      
      }
   
   
   
   
   
   
    return (
       <div className="maincontainer bg-info">
        <div class="container-fluid">
            <div class="row no-gutter">
               
                <div class="col-md-6 d-none d-md-flex bg-image"><div className='ms-4 my-4'><img src="Images/sign1.jpg" class="con" alt="Cinque Terre"/></div></div>

        
                
                <div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center py-5">
                    
                       
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h3 class="display-4">Welcome Back!</h3>
                                    <p class="text-muted mb-4">Login to Continue</p>
                                    <form>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" id="inputEmail"></label>
                                            <input id="inputEmail" type="email" placeholder="Email address" required=" " class="form-control rounded-pill border-0 shadow-sm px-4"
                                            value={email}
                                            onChange={(event) =>
                                            {
                                                setEmail(event.target.value);      
                                            }}
                                            />
                                        </div>
                                        
                                        <div class="mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required=" " class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                            value={password}
                                            onChange={(event) =>
                                            {
                                                setPassword(event.target.value);      
                                            }}
                                            />
                                        </div>
                                        <div class="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                        </div>
                                        <div class="d-grid gap-2 mt-2">
                                        <button type="submit" class="btn btn-primary" onClick={login} >Sign In</button>
                                        <Link to="/signin" class="font-italic text-muted"> 
                                                <u>Forget Password</u></Link>
                                        </div>
                                        
                                        
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
      </div>
    );
  }
  
  export default SignIn;