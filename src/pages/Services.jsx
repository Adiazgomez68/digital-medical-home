import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Grupo322 from '../assets/Grupo 322.png';
import FormOur from '../assets/Form-Our blog.png';
import FormOur2 from '../assets/Form-Our blog Copy 2.png';
import FormOur3 from '../assets/Form-Our blog Copy.png';

import '../styles/_Services/Services.css';

const Services = () => {
    return(
        <>
            <Header value={'transparent'}/>

            <div className='banner-serv'>
                <img src={Grupo322} alt="" 
                    style={{
                        height: '450px', position: 'absolute', width: '100%'
                    }}
                />
                <div id='serv'>
                    <h1> SERVICIOS </h1>
                    <p> 
                        ¡Ofrecemos todos los aspectos de la práctica médica para toda su familia!
                    </p>
                </div>
            </div>

            <div className="serv-our">
                <h2>NUESTROS SERVICIOS</h2>
                <div className='our-images'>
                   <Link to="/servicesop" style={{textDecoration: 'none'}}>
                        <div style={{marginTop: '0px'}}>
                            <img src="" alt="" />
                            <p>CT SCAN</p>
                        </div>
                    </Link>
                    <Link to="/servicesop" style={{textDecoration: 'none'}}>
                        <div style={{marginTop: '0px'}}>
                            <img src="" alt="" />
                            <p>MRI MAGNETIC RESONANCE</p>
                        </div>
                    </Link>
                    <Link to="/servicesop" style={{textDecoration: 'none'}}>
                        <div style={{marginTop: '0px'}}>
                            <img src="" alt="" />
                            <p>DIGITAL X-RAY</p>
                        </div>
                    </Link>
                    <Link to="/servicesop" style={{textDecoration: 'none'}}>
                        <div style={{marginTop: '0px'}}>
                            <img src="" alt="" />
                            <p>DIGITAL BILATERAL MAMMOGRAPHY</p>
                        </div>
                    </Link>
                    <Link to="/servicesop" style={{textDecoration: 'none'}}>
                        <div style={{marginTop: '0px'}}>
                            <img src="" alt="" />
                            <p>ELECTROCARDIOGRAM (EKG)</p>
                        </div>
                    </Link>
                    <Link to="/servicesop" style={{textDecoration: 'none'}}>
                        <div>
                            <img src="" alt="" />
                            <p>ABDOMINAL GENERAL</p>
                        </div>
                    </Link>
                    <Link to="/servicesop" style={{textDecoration: 'none'}}>
                        <div>
                            <img src="" alt="" />
                            <p>GINECOLÓGICA O PÉLVICA</p>
                        </div>
                    </Link>
                    <Link to="/servicesop" style={{textDecoration: 'none'}}>
                        <div>
                            <img src="" alt="" />
                            <p>VASCULAR GENERAL, DOPPLER, TRANSCRANEAL.</p>
                        </div>
                    </Link>
                    <Link to="/servicesop" style={{textDecoration: 'none'}}>
                        <div>
                            <img src="" alt="" />
                            <p>ECOCARDIOGRAFÍA</p>
                        </div>
                    </Link>
                    <Link to="/servicesop" style={{textDecoration: 'none'}}>
                        <div>
                            <img src="" alt="" />
                            <p>MÚSCULO</p>
                        </div>
                    </Link>
                    <Link to="/servicesop" style={{textDecoration: 'none'}}>
                        <div>
                            <img src="" alt="" />
                            <p>ESQUELÉTICO</p>
                        </div>
                    </Link>
                    <Link to="/servicesop" style={{textDecoration: 'none'}}>
                        <div>
                            <img src="" alt="" />
                            <p>PARTES BLANDAS</p>
                        </div>
                    </Link>
                    <Link to="/servicesop" style={{textDecoration: 'none'}}>
                        <div>
                            <img src="" alt="" />
                            <p>ELASTOGRAFÍA: HEPÁTICA, TIROIDES, MAMAS, ETC.</p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='jobs' style={{top: '40px'}}>
                <p style={{fontFamily: 'Rubik', fontSize: '16px'}}>Nuestros trabajos</p>
                <h2 style={{fontFamily: 'Pathway Gothic One', fontSize: '38px'}}>Nuestra galería</h2>
                <div id='pictures'>
                    <div id="images"><img src={FormOur} alt="" /></div>
                    <div id="images" style={{marginLeft: '390px'}}><img src={FormOur2} alt="" /></div>
                    <div id="images" style={{marginLeft: '780px'}}><img src={FormOur3} alt="" /></div>
                    <div id="images" style={{marginTop: '230px'}}><img src={FormOur} alt="" /></div>
                    <div id="images" style={{marginTop: '230px',marginLeft: '390px'}}><img src={FormOur2} alt="" /></div>
                    <div id="images" style={{marginTop: '230px',marginLeft: '780px'}}><img src={FormOur3} alt="" /></div>
                    <div id="images" style={{marginTop: '462px'}}><img src={FormOur} alt="" /></div>
                    <div id="images" style={{marginTop: '462px',marginLeft: '390px'}}><img src={FormOur2} alt="" /></div>
                    <div id="images" style={{marginTop: '462px',marginLeft: '780px'}}><img src={FormOur3} alt="" /></div>
                    <div id="images" style={{marginTop: '694px'}}><img src={FormOur} alt="" /></div>
                    <div id="images" style={{marginTop: '694px',marginLeft: '390px'}}><img src={FormOur2} alt="" /></div>
                    <div id="images" style={{marginTop: '694px',marginLeft: '780px'}}><img src={FormOur3} alt="" /></div>
                </div>
            </div>

            <Footer value={'440px'}/>
        </>
    )
}

export default Services;