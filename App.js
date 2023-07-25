import React from "react"
import About from "./components/About"
import Footer from "./components/Footer"
import Interests from "./components/Interests"
import Intro from "./components/Intro"

export default function() {
    return (
        <div>
            <Intro />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}