import { returnStatement } from "@babel/types";
import React from "react";
import logo from "../assets/insta.png";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

function Main() {
    return (
        <main>

            <div id="ilustration">
                <img src={slide1} />
            </div>

            <form>
                <img id="logo" src={logo} />
                <input placeholder="Phone number, username, or email" type="text" />
                <input placeholder="Password" type="text" />
                <button>Log In</button>

                <div id="or">

                    <h4>OR</h4>
                    <a href="#" id="fb-login">Log in with Facebook</a>
                    <a href="#">Forgot Password?</a>

                </div>

                <div id="download">
                    <div id="signup">Don`t have an account? <a href="#">Sign up</a></div>
                    <h4>Get the app</h4>
                    <div>
                        <a href="#"><img src={appstore} /></a>
                        <a href="#"><img src={playstore} /></a>
                    </div>
                </div>

            </form>
        </main>
    )
}

export default Main;