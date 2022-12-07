import React from "react";

import PropType from "prop-types";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const ImgAndTextCtnr = (props) => {
	return (

    <div>
    <section id="img-and-text-ctnr">
        <div className="image-content">
            <img src="{props.ctnr_image1}" alt="post image" width="2070" height="1170" />
        </div>
        <div className="text-content">
            <h3>
            {props.ctnr_title1}
            </h3>

            <p>{props.ctnr_paragraph1}</p>
        </div>
    </section>

    <section id="img-and-text-ctnr" class="left-text">
        <div className="text-content">
            <h3 className="hero-header">
            {props.ctnr_title2}
            </h3>
            <p>
                {props.ctnr_paragraph2}
            </p>
        </div>
        <div className="image-content">
            <img src="{props.ctnr_image2}" alt="post image" width="2070" height="1170" />
        </div>
    </section>
    <style jsx> {`
        /*IMAGE AND TEXT SECTION*/
        #img-and-text-ctnr {
            display: flex;
        }
        #img-and-text-ctnr .text-content {
            display: flex;
            flex-direction: column;
            padding: 0 16.4% 0 6.5%;
            width: 49.9%;
            justify-content: center;
        }
        #img-and-text-ctnr .text-content p {
            width: 100%;
            margin-top: 30px;
            min-width: 518.4px;
        }
        #img-and-text-ctnr .image-content {
            width: 50%;
            background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 70%);
        }
        #img-and-text-ctnr .image-content img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            z-index: -1;
            position: relative;
        }
        #img-and-text-ctnr.left-text .text-content {
            align-items: flex-end;
        }
        #img-and-text-ctnr h3 {
            font-size: clamp(	1.125rem,	0.8519417476rem + 	1.165048544vw,	2.25rem);
            font-weight: 600;
            width: 519.484px;
            line-height: 46px;
        }

        /*MEDIA QUERIES*/
        @media screen and (max-width: 1400px) {
            #img-and-text-ctnr .text-content p {
                width: 100%;
                min-width: 447.4px;
            }
            #img-and-text-ctnr h3 {
                width: 447.4px;
            }
        }
        @media screen and (max-width: 1150px) {
            #img-and-text-ctnr .text-content p {
                width: 100%;
                margin-top: 10px !important;
            }
            #img-and-text-ctnr .text-content {
                display: flex;
                flex-direction: column;
                padding: 0 5.4% 0 6.5% !important;
                width: 49.9%;
                justify-content: center;
            }
            #img-and-text-ctnr .text-content p,
            #img-and-text-ctnr h3 {
                width: 100%;
                min-width: 100%;
            }
            #img-and-text-ctnr.left-text .text-content {
                padding: 0px 6.5% 0 5.4% !important;
                justify-content: center;
            }
            #img-and-text-ctnr p {
                line-height: 22px;

            }
            #img-and-text-ctnr .text-content,
            #img-and-text-ctnr.left-text .text-content {
                padding: 2% 5.4% 0 6.5% !important;
                justify-content: start !important;
            }
        }
        @media screen and (max-width: 1025px) {
            #img-and-text-ctnr .text-content,
            #img-and-text-ctnr.left-text .text-content {
                padding: 1% 3.4% 0 2.5% !important;
                justify-content: start !important;
            }
        }
        @media screen and (max-width: 900px) {
            #img-and-text-ctnr .text-content p {
                margin-top: 0px !important;
            }
            #img-and-text-ctnr p {
                line-height: 16px;
            }
        }
        @media screen and (max-width: 768px) {
            #img-and-text-ctnr.left-text {
                flex-direction: column-reverse;
            }
            #img-and-text-ctnr {
                display: flex;
                flex-direction: column;
            }
            #img-and-text-ctnr .image-content,
            #img-and-text-ctnr .text-content {
                width: 100% !important;
                display: flex;
            }
            #img-and-text-ctnr p {
                line-height: 24px;
            }
            #img-and-text-ctnr .text-content, #img-and-text-ctnr.left-text .text-content {
                padding: 31px 20px 38px 20px !important;
            }
        }
    `}
    </style>
    </div>
    )
};


ImgAndTextCtnr.propTypes = {
    ctnr_image1: PropType.string,
    // 2) add here the new properties into the proptypes object
    ctnr_title1: PropType.string,
    ctnr_paragraph1: PropType.string,
    ctnr_title2: PropType.string,
    ctnr_paragraph2: PropType.string,
    ctnr_image2: PropType.string
};

export default ImgAndTextCtnr;
