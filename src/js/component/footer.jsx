import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
// const Footer = () => {
// 	return (
//         <footer>
//             <div className="logo-ctnr"></div>
//             <div className="ctnr1">
//                 <ul>
//                     <li>text1</li>
//                     <li>text1</li>
//                     <li>text1</li>
//                     <li>text1</li>
//                 </ul>
//             </div>
//             <div className="ctnr2">
//                 <ul>
//                     <li>text1</li>
//                     <li>text1</li>
//                     <li>text1</li>
//                     <li>text1</li>
//                 </ul>
//             </div>
//             <div className="ctnr3">
//                 <ul>
//                     <li>text1</li>
//                     <li>text1</li>
//                     <li>text1</li>
//                     <li>text1</li>
//                 </ul>
//             </div>

//         </footer>
//     )
// };

// export default Footer;

const Footer = () => {
	return (
          
            <footer>
            <div className="links-ctnr">
                <div className="img-ctnr">
                    <a href="/">
                        <img src="" width="97" height="63"/>
                    </a>
                </div>
                <div className="text-ctnr">
                    <h4>OFFICE</h4>
                    <p>2200 NW 72nd Way Pembroke Pines, FL 33024</p>
                    <p className="email">artanddesignblinds@gmail.com</p>
                    <p>(754) 267-6007</p>
                </div>
                <div className="text-ctnr">
                    <h4>QUICK LINKS</h4>
                    <p><a href="/commercial-services/">Commercial Services</a></p>
                    <p><a href="/construction-services/">Construction Services</a></p>
                    <p><a href="/equipment-rental/">Equipment Rental</a></p>
                    <p><a href="/sustainability/">Sustainability</a></p>
                </div>
                <div className="text-ctnr">
                    <h4>HELP</h4>
                    <p><a href="/about-us/">About Us</a></p>
                    <p><a href="/order-today/">Contact Us</a></p>
                    <p><a href="/work-with-bp/">Work With BP</a></p>
                    <p><a href="/faq/">FAQ</a></p>
                </div>
                <div className="text-ctnr">
                    <h4>OPENING TIME</h4>
                    <p className="days">Monday - Friday</p>
                    <p>7:30am – 5:30pm</p>
                    <p  className="days">Saturdays</p>
                    <p>7:30am – 12:00pm</p>
                </div>
            </div>
            <div className="bottom-div">
                <div className="ctnr">
                    <p>© 2022 Art & Design Blinds</p>
                    <a className="ctnr2" href="https://www.linkedin.com/company/bp-environmental-services">
                        <img className="linkedin-logo" src="" width="42" height="42"/>
            {/* <!--                <p>Terms & Conditions</p>--> */}
            {/* <!--                <p>Privacy Policy</p>--> */}
                    </a>
                </div>
            </div>
            <style jsx>{`

                footer a {
                    color: white !important;
                    text-decoration: none;
                }

                @media screen and (max-width: 1800px) {
                    footer .text-ctnr {
                        min-width: 172.8px;
                    }
                    footer .text-ctnr:nth-child(4) {
                        min-width: 134.4px;
                    }
                }
                @media screen and (max-width: 1600px) {

                }
                @media screen and (max-width: 1400px) {
                    footer .text-ctnr {
                        margin-right: 51px;
                    }
                }
                @media screen and (max-width: 1200px) {
                    footer .img-ctnr {
                        margin-right: 50px;
                    }
                    footer .text-ctnr {
                        margin-right: 21px;
                    }

                }
                @media screen and (max-width: 930px) {
                    .links-ctnr {
                        padding-top: 38px;
                        flex-wrap: wrap;
                        padding-left: 80px;
                        justify-content: flex-start;
                    }
                    footer .img-ctnr {
                        width: 100%;
                        flex-wrap: wrap;
                        margin-bottom: 48px;
                    }
                    .bottom-div .ctnr {
                        width: 90%;
                    }
                }
                @media screen and (max-width: 768px) {
                    .text-ctnr:nth-child(2) p {
                        width: 134px;
                    }
                    .text-ctnr:nth-child(5) {
                        margin-top: 30px;
                    }

                }
                @media screen and (max-width: 622px) {

                    .text-ctnr:nth-child(2) {
                        order: 2;
                    }
                    .text-ctnr:nth-child(3) {
                        margin-top: 30px;
                        order: 4;
                    }
                    .text-ctnr:nth-child(4) {
                        margin-top: 30px;
                        order: 5;
                    }
                    .text-ctnr:nth-child(5) {
                        margin-top: 0;
                        order: 3;
                    }
                    footer p.email,
                    footer p.days{
                        margin-bottom: 0 !important;
                    }
                    .linkedin-logo {
                        width: 20px;
                        margin-right: 0;
                        order: 3;
                    }
                    .bottom-div .ctnr {
                        width: 100%;
                        flex-direction: column-reverse;
                        padding-left: 20px;
                    }
                    .bottom-div .ctnr2 {
                        margin-left: 0;
                        align-self: flex-start;
                        width: 100%;
                        justify-content: space-between;
                        padding-left: 0;
                        padding-right: 20px;
                    }
                    .bottom-div p {
                        margin-bottom: 20px;
                        margin-top: 15.5px;
                        align-self: flex-start;
                        padding-left: 0;
                    }
                    .bottom-div {
                        padding-top: 0;
                        padding-bottom: 0;
                    }
                    .bottom-div .ctnr2 :nth-child(2) {
                        margin-right: 0;
                    }


                }
                @media screen and (max-width: 480px) {
                    footer h4 {
                        margin-bottom: 13.3px;
                    }
                    footer .links-ctnr {
                        padding-left: 21px;
                        padding-bottom: 71px;
                    }
                    footer .img-ctnr img {
                        width: 47.25px;
                    }
                    footer .text-ctnr {
                        margin-right: 0;
                    }
                }
                @media screen and (max-width: 370px) {
                    footer .text-ctnr {
                        min-width: 142.8px;
                    }
                }


                `}</style>


            </footer>
    )
};

export default Footer;