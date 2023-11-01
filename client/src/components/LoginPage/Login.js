import React from "react"
import "./loginStyle.css"
import logo from "../../../src/media/fin-logo-new.png";
import {BsGoogle} from "react-icons/bs"

const Login = () =>{
    return (
      <>
        <div className="login-container">
          <div className="logo-section">
            <img src={logo} className="brand-logo" alt="Financial-Journal" />
          </div>
          <form className="login-form-section">
            <div className="form-floating vertical-sm-gap">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating vertical-sm-gap">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="email-login">
              <button className="btn btn-primary" type="submit">
                Login via Email
              </button>
            </div>

            <div className="social-login-btn-grp vertical-sm-gap">
              <button className="btn btn-primary" type="submit">
                <div>
                  <BsGoogle />
                  <p>Login via Gmail</p>
                </div>
              </button>

              <button className="btn btn-primary" type="submit">
                Login via Mobile
              </button>
            </div>
          </form>
        </div>
      </>
    );
}
export default Login;