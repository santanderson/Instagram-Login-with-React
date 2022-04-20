import { returnStatement } from "@babel/types";
import React from "react";
import logo from "../assets/insta.png";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

function Main(){
    return (
        <main>

                <div id="register">
                    <div className="ilustration">
                        <img src={slide1}/>
                        <img src={slide2}/>
                    </div>

                    <form>
                        <img id="logo" src={logo}/>
                        <input placeholder="Phone number, username, or email" type="text"/>
                        <input placeholder="Password" type="text"/>
                        <button id="button">Log In</button>
                    </form>
                </div>

                <div id="links">

                    <div id="dv1">OR</div>

                    <div id="dv2">
                        <a href="#" id="fcbk-login">Log in with Facebook</a>
                        <a href="#">Forgot Password?</a>
                    </div>

                    <div id="dv3">
                        <div id="signup">Don`t have an account? <a href="#">Sign up</a></div>

                        <div id="download">
                            <h4>Get the app</h4>
                            <div>
                                <a href="#"><img src={appstore}/></a>
                                <a href="#"><img src={playstore}/></a>
                            </div>
                        </div>
                    </div>


                </div>
        </main>
    )
}

export default Main;