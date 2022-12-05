import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Hero = () => {
	return (
        <div className="hero-image">
            <div className="hero-text">
                <h1 style="font-size: 50px">I am John Doe</h1>
                <p>And I'm a Photographer</p>
                <button>Hire me</button>
            </div>
        
    </div>
       
    )
};

export default Hero;
