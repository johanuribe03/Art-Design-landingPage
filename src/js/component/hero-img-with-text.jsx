import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const HeroImgWithText = () => {
	return (
        // <!--HERO-->
        <section id="hero-img-with-text">
            <img className="img-back" src="" width="3840" height="1382"/>
            <h1>Art & Design</h1>
            <style jsx> {`
            /*HERO*/
            #hero-img-with-text {
                height: auto;
                background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 70%);
                position: relative;
                display: flex;
            }
            #hero-img-with-text h1 {
                position: absolute;
                bottom: 34%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: clamp(	2.125rem,	1.427184466rem + 	2.977346278vw,	5rem);
                text-transform: none;
                text-align: center;
                width: 100%;
                color: white;
            }
            /*BACKGROUND IMAGE WITH TEXT*/
            #hero-img-with-text .img-back {
                height: 100%;
                max-width: 100%;
                z-index: -1;
                position: relative;
            }

            /*MEDIA QUERIES*/
            @media screen and (max-width: 1400px) {
                #hero-img-with-text h1 {
                    bottom: 17%;
                }
            }
            @media screen and (max-width: 1025px) {
                #hero-img-with-text h1 {
                    bottom: 7%;
                }
            }
            @media screen and (max-width: 768px) {
                #hero-img-with-text h1 {
                    bottom: -7%;
                }
                #hero-img-with-text {
                    height: 400px;
                }
                #hero-img-with-text .img-back {
                    height: 100%;
                    max-width: 100%;
                    z-index: -1;
                    position: relative;
                    object-fit: cover;
                }
                #hero-img-with-text h1 {
                    bottom: 25%;
                }
            }
            @media screen and (max-width: 1600px) {}
            @media screen and (max-width: 1600px) {}
            @media screen and (max-width: 1600px) {}
            @media screen and (max-width: 1600px) {}
            `}
            </style>
        </section>
    )
};

export default HeroImgWithText;