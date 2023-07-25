import React from "react"


export default function() {
    return (
        <div className="intro--container">
            <img className="intro--img" src="./images/Me.jpg" alt="Photo of Donovan Gibson"/>
            <h1 className="intro--name">Donovan Gibson</h1>
            <h3 className="intro--title">Frontend Developer</h3>
            <h4 className="intro--site"><a href="https://dgibson89.netlify.app/" target="_blank">Portfolio Website</a></h4>
                <div className="intro--btns">
                    <button className="intro--email">Email</button>
                    <button className="intro--linkedin">LinkedIn</button>
                </div>
        </div>
    )
}