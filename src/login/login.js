import React from "react";
import "./login.css";

import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div className="cover">
            

        <div class="Login bg-success">
            <form>
                <h1 class="text-center text-white">Login</h1>

                <div className="form-group was-validated">
                    <label class="form-label text-white" for="email">Email Address</label>
                    <input class="form-control" type="email" id="email" required/>
                    <div class="invalid-feedback">
                        Please Enter Your Email Address
                    </div>                    
                </div>

                <div className="form-group was-validated">
                    <label class="form-label text-white" for="password">Password</label>
                    <input class="form-control" type="password" id="password" required/>
                    <div class="invalid-feedback">
                        Please Enter Your Password
                    </div>                    
                </div>

                <div class="form-group form-check">
                    <input class="form-check-input" type="checkbox" id="check" />
                    <label class="form-chekc-label text-white" for="check">Remember Me</label>
                </div>
                <Link to="/"><input class="btn btn-success bg-danger text-white w-50" type="submit" value="Cancel"/></Link>
                <input class="btn btn-success bg-primary text-white w-50" type="submit" value="Sign In"/>

            </form>
        </div>

        </div>
    )
}

export default Login