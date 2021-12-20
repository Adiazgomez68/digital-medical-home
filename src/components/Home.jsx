import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from '@mui/material/Button';
import Grupo326 from '../assets/Grupo 326.png';
import Pattern from '../assets/Pattern.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Grupo331 from '../assets/Grupo 331.svg';
import Grupo332 from '../assets/Grupo 332.svg';
import Grupo333 from '../assets/Grupo 333.svg';
import Grupo334 from '../assets/Grupo 334.svg';
import Doctor from '../assets/Form-Our doctor.png';
import Doctor2 from '../assets/Img-t.png';
import Doctor3 from '../assets/Img-d.png';
import Doctor4 from '../assets/Img.png';
import Oval from '../assets/Oval.png';
import Oval2 from '../assets/Oval2.png';
import Oval3 from '../assets/Oval3.png';
import Lab1 from '../assets/lab1.png';
import Lab2 from '../assets/lab2.png';
import Lab3 from '../assets/lab3.png';
import Lab4 from '../assets/lab4.png';

import '../styles/Home.css';

const Home = () => {
    return(
        <>
            <Header value={'#284761'} />

            <div className='banner'>
                <div className='info-text'>
                    <h1> Tu salud en mano de los mejores </h1>
                    <p style={{marginTop: '30px'}}> 
                        Como tu centro de diagnostico de confianza nuestra meta es brindarte una 
                        atención de calidad, con profesionales altamente capacitados para diagnosticar 
                        y guiar a nuestros pacientes en todos los procedimientos.
                    </p>
                    <p style={{marginTop: '30px'}}>
                        Contamos con los equipos más actualizados y eficaces del mercado, esto te 
                        brindará más confianza y seguridad al asistir a nuestras instalaciones.
                    </p>
                </div>

                <div className='info-img'>
                    <img src={Grupo326} alt="living room" />
                    <div id='line'></div>
                </div>
            </div>

            <div className="body">
                <img src={Pattern} alt="Pattern" />
                <div id='body-text'>
                    <p id='we'> Nosotros </p>
                    <h1> Contamos con más de 10 años de experiencia </h1>
                    <p id='inf'> 
                        La salud y el bienestar de todos nuestros pacientes es nuestra prioridad, 
                        siempre mantenemos los estándares de seguridad y salubridad por el bienestar 
                        de nuestros pacientes. 
                    </p>
                    <Button id="btn-us" color="inherit"> Conoce más de nosotros </Button>
                </div>
                <hr style={{width: '83%', opacity: '0.1', marginTop: '50px' }}/>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <div className='services'>
                                <p> NUESTROS SERVICIOS </p>
                                <h1> ¡Ofrecemos todos los aspectos de la práctica médica para toda su familia! </h1>
                                <ul>
                                    <li> <span> CT SCAN </span> </li>
                                    <li> <span>MRI MAGNETIC RESONANCE</span> </li>
                                    <li> <span>DIGITAL X-RAY</span></li>
                                    <li> <span>DIGITAL BILATERAL MAMMOGRAPHY</span> </li>
                                    <li> <span>ELECTROCARDIOGRAM (EKG)</span> </li>
                                </ul>
                                <ul style={{top: '295px'}}>
                                    <strong style={{color: '#284761'}}>ECOGRAFÍA:</strong>
                                    <li> <span>ABDOMINAL GENERAL</span> </li>
                                    <li> <span>GINECOLÓGICA O PÉLVICA</span> </li>
                                    <li> <span>VASCULAR GENERAL, DOPPLER, TRANSCRANEAL.</span> </li>
                                    <li> <span>ECOCARDIOGRAFÍA</span> </li>
                                    <li> <span>MÚSCULO</span> </li>
                                    <li> <span>ESQUELÉTICO</span> </li>
                                    <li> <span>PARTES BLANDAS</span> </li>
                                    <li> <span>ELASTOGRAFÍA: HEPÁTICA, TIROIDES, MAMAS, ETC.</span></li>
                                </ul>
                                <Button id="btn-ser"> CONOCE TODOS LOS SERVICIOS </Button>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="services-p" style={{width: '262px', right: '14px'}}>
                                <div id='box-img' style={{top: '20px'}}>
                                    <img src={Grupo331} alt="X-Ray" />
                                    <p>DIGITAL X-RAY</p>
                                </div>
                                <div id='box-img' style={{top: '325px'}}>
                                    <img src={Grupo333} alt="Skeleton" />
                                    <p>ESQUELÉTICO</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="services-p" style={{width: '262px', right: '47px'}}>
                                <div id='box-img' style={{top: '120px'}}>
                                    <img src={Grupo332} alt="MRI" />
                                    <p style={{left:'30px', bottom: '13px', lineHeight: '23px', width:'200px'}}>MRI MAGNETIC RESONANCE</p>
                                </div>
                                <div id='box-img' style={{top: '425px'}}>
                                    <img src={Grupo334} alt="Gynecologist" />
                                    <p style={{left:'35px', bottom: '13px', lineHeight: '23px', width:'180px'}}>GINECOLÓGICA O PÉLVICA</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>

                <div className='doctor'>
                    <p> NUESTROS MÉDICOS </p>
                    <h2> Todos nuestros expertos </h2>
                    <div style={{display: 'inline-flex'}}>
                        <div id='doctor-img'>
                            <img src={Doctor} alt="Doctor" />
                        </div>
                    
                        <div id='doctor-img' style={{left: '400px', top: '250px'}}>
                            <img src={Doctor2} alt="Doctor2" />
                            <h4> Micheal Scofield </h4>
                            <p> LEER MÁS </p>
                        </div>
                    
                        <div id='doctor-img' style={{left: '691px'}}>
                            <img src={Doctor3} alt="Doctor3" />
                            <h4> Micheal Scofield </h4>
                            <p> LEER MÁS </p>
                        </div>
                    
                        <div id='doctor-img' style={{left: '983px', top: '250px'}}>
                            <img src={Doctor4} alt="Doctor4" />
                            <h4> Micheal Scofield </h4>
                            <p> LEER MÁS </p>
                        </div> 
                    </div>

                    <div className='doctor-info'>
                        <h2> Mejorando la calidad de tu vida a través de una mejor salud. </h2>
                        <hr />
                        <p> 
                            Nuestro objetivo es brindar atención de calidad de manera cortés, 
                            respetuosa y compasiva. Esperamos que nos permitas cuidarte y esforzarnos 
                            por ser la primera y mejor opción para el cuidado de la salud.
                        </p>
                        <a href="#!"> Ver más </a>
                    </div>
                </div>

                <div className='testimonials'>
                    <div id="test-text">
                        <p> TESTIMONIOS </p>
                        <h2> Lo que nuestros clientes <br/> dicen </h2>
                    </div>
                    <div className='test-cards'>
                        <div id="card">
                            <img alt="Frank" src={Oval}/>
                            <h5> Frank Gallaghers </h5>
                            <span><p>Paciente</p></span>
                            <p style={{marginTop: '40px', width: '250px'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente, ea fuga eaque, veniam accusamus iste 
                                perspiciatis error ipsa eligendi vel 
                            </p>
                        </div>
                        <div id="card">
                            <img alt="Frank" src={Oval2} style={{left: '375px'}}/>
                            <h5> Frank Gallaghers </h5>
                            <span><p>Paciente</p></span>
                            <p style={{marginTop: '40px', width: '250px'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente, ea fuga eaque, veniam accusamus iste 
                                perspiciatis error ipsa eligendi vel 
                            </p>
                        </div>
                        <div id="card" style={{ width: '132px', marginRight: '0', borderRadius: '8px 0 0 8px'}}>
                            <img alt="Frank" src={Oval3} style={{left: '718px'}}/>
                            <p style={{marginTop: '124px'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='jobs'>
                    <p>Nuestros trabajos</p>
                    <h2>Nuestra galería</h2>
                    <div id='pictures'>
                        <div id="images"><img src={Lab1} alt="" /></div>
                        <div id="images" style={{marginLeft: '390px'}}><img src={Lab3} alt="" /></div>
                        <div id="images" style={{marginLeft: '780px'}}><img src={Lab4} alt="" /></div>
                        <div id="images" style={{marginTop: '230px'}}><img src={Lab2} alt="" /></div>
                        <div id="images" style={{marginTop: '230px',marginLeft: '390px'}}><img src={Lab3} alt="" /></div>
                        <div id="images" style={{marginTop: '230px',marginLeft: '780px'}}><img src={Lab4} alt="" /></div>
                    </div>
                    <a href="#!"> Ver todas </a>
                </div>
            </div>

            <Footer value={"3050px"}/>
        </>
    )
}

export default Home;