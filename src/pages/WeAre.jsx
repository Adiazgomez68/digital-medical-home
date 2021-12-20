import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Grupo314 from '../assets/Grupo 314.png';
import Grupo321 from '../assets/Grupo 321.png';
import Doctor from '../assets/Img_a.png';
import Doctor2 from '../assets/Img-t.png';
import Doctor3 from '../assets/Img-d.png';
import Doctor4 from '../assets/Img.png';

import '../styles/WeAre/WeAre.css';

const WeAre = () => {
    return(
        <>
            <Header id="header" value={'transparent'}/>

            <div className='banner-we'>
                <div id='we'>
                    <h1> Nosotros </h1>
                    <p> 
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                        nonumy eirmod tempor
                    </p>
                </div>
            </div>

            <div className="goal">
                <div className='goal-box'>
                    <img src={Grupo321} alt="" />
                </div>
                <div className='goal-text'>
                    <div id='text'>
                        <h1>Misión</h1>
                        <p>
                            We provide companionate care and superior medical imaging services to 
                            patients, providers, and healthcare organizations, with a focus on 
                            accurate interpretation and efficiency, while using modern, relevant 
                            and accessible technologies.
                        </p>
                    </div>
                    <div id='text'>
                        <h1>Visión</h1>
                        <p>
                            We provide companionate care and superior medical imaging services to 
                            patients, providers, and healthcare organizations, with a focus on 
                            accurate interpretation and efficiency, while using modern, relevant 
                            and accessible technologies.
                        </p>
                    </div>
                </div>
            </div>

            <div className="ethical">
                <h1>NUESTROS VALORES</h1>
                <div id='e-images'>
                    <div>
                        <img src={Grupo314} alt="Hands" /> 
                        <p>Lorem ipsum dolor</p>
                    </div><br />
                    <div>
                        <img src={Grupo314} alt="Hands" />
                        <p>Lorem ipsum dolor</p>
                    </div> <br />
                    <div>
                        <img src={Grupo314} alt="Hands" /> 
                        <p>Lorem ipsum dolor</p>
                    </div><br />
                    <div>
                        <img src={Grupo314} alt="Hands" /> 
                        <p>Lorem ipsum dolor</p>
                    </div>
                </div>
            </div>

            <div className='doctor' style={{top: '60px', height: '1100px'}} >
                <strong><p> NUESTROS MÉDICOS </p></strong>
                <h2 style={{fontFamily:'Pathway Gothic One', fontSize: '30px'}}> Todos nuestros expertos </h2>
                <div style={{display: 'inline-flex'}}>
                    <div id='doctor-img'>
                        <img src={Doctor} alt="Doctor" />
                        <h4> Micheal Scofield </h4>    
                    </div>
                
                    <div id='doctor-img' style={{left: '400px'}}>
                        <img src={Doctor2} alt="Doctor2" />
                        <h4> Micheal Scofield </h4>                      
                    </div>
                
                    <div id='doctor-img' style={{left: '691px'}}>
                        <img src={Doctor3} alt="Doctor3" />
                        <h4> Micheal Scofield </h4>

                    </div>
                
                    <div id='doctor-img' style={{left: '983px'}}>
                        <img src={Doctor4} alt="Doctor4" />
                        <h4> Micheal Scofield </h4>
                    </div> 
                
                    <div id='doctor-img' style={{top: '590px'}}>
                        <img src={Doctor} alt="Doctor" />
                        <h4> Micheal Scofield </h4>    
                    </div>
                
                    <div id='doctor-img' style={{left: '400px', top: '590px'}}>
                        <img src={Doctor2} alt="Doctor2" />
                        <h4> Micheal Scofield </h4>                      
                    </div>
                
                    <div id='doctor-img' style={{left: '691px',top: '590px'}}>
                        <img src={Doctor3} alt="Doctor3" />
                        <h4> Micheal Scofield </h4>

                    </div>
                
                    <div id='doctor-img' style={{left: '983px',top: '590px'}}>
                        <img src={Doctor4} alt="Doctor4" />
                        <h4> Micheal Scofield </h4>
                    </div> 
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default WeAre;