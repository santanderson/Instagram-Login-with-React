import { returnStatement } from "@babel/types";
import React from "react";

function Main(){
    return (
        <main>
            <div className="ilustration">
                <img/>
                <img/>
            </div>
            <div>
                <form>
                    <img/>
                    <input type="text"/>
                    <input type="text"/>
                    <button>Log In</button>

                    <a href="#">Log in with Facebook</a>
                    <a href="#">Forgot Password?</a>
                </form>
                <form>
                    Don`t have an account? <a>Sign up</a>
                </form>
                    <h4>Get the app</h4>
                <img/>
                <img/>
            </div>
        </main>
    )
}

export default Main;