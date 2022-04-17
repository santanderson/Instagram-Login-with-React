import { returnStatement } from "@babel/types";
import React from "react";

function Footer(){
    return (
        <>
            <div className="FAQ">
                <a href="#">Meta</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Jobs</a>
                <a href="#">Help</a>
                <a href="#">Api</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Top Accounts</a>
                <a href="#">Hashtags</a>
                <a href="#">Locations</a>
                <a href="#">Instagram Lite</a>
                <a href="#">Dance</a>
                <a href="#">Food & Drink</a>
                <a href="#">Home & Garden</a>
                <a href="#">Music</a>
                <a href="#">Visual Arts</a>
            </div>
            <div className="copywrite">
                <select>
                    <option>English</option>
                    <option>Portuguese</option>
                    <option>Deutsch</option>
                </select>

                <h4>
                    &copy; 2022 Instagram from Meta
                </h4>
            </div>
        </>
    )
}

export default Footer;