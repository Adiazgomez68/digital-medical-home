import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '@mui/material/Button';
import Pattern from '../assets/Pattern.png';

import '../styles/Contact/Contact.css';

const Contact = () => {
    return(
        <>
            <Header value={"#5CA28A"}/>

            <div className='banner-contact'>
                <div id='contact'>
                    <h1> Contacto </h1>
                    <p> 
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                        tempor invidunt. 
                    </p>
                </div>
                <img src={Pattern} alt="Pattern" />
            </div>

            <div className="form-contact">
                <div id='form'>
                    <h1>CONTÁCTANOS</h1>
                    <form action="">
                        <div style={{display: 'inline-flex'}}>
                            <label htmlFor="">
                                Nombre completo * <br />
                                <input type="text" />
                            </label> <br />
                            <label htmlFor="" style={{marginLeft: '15px'}}>
                                Teléfono * <br />
                                <input type="text" />
                            </label> 
                        </div> <br />

                        <label htmlFor="">
                            Email * <br />
                            <input type="email" style={{width: '423px'}}/>
                        </label> <br />

                        <label htmlFor="">
                            Mensaje * <br />
                            <textarea></textarea>
                        </label> <br />

                        <Button id="send"> Enviar </Button>
                    </form>
                </div>
                <div id='address'>
                    <h1>Dirección</h1>
                    <ul>
                        <li><span>41 Tamiani Canal Road Miami, Florida, Miami.</span></li>
                        <li><span>WhatsApp: 786-860-9424 - 305-283-6612 </span></li>
                        <li><span>Email: admin@dominio.com </span></li>
                    </ul>
                    <strong style={{color: 'white', fontSize: '20px'}}>Horarios de atención </strong>
                    <ul>
                        <li><span>Lunes - viernes: 8:00 am - 7:00 pm </span></li>
                        <li><span>Sábados: 8:00 am - 2:00 pm</span></li>
                    </ul>
                    <div id='ad-info'>
                        <p>¿Necitas ayuda personalizada?</p>
                        <h2>ESCRÍBENOS YA MISMO</h2>
                        <Button id='ad-btn'>ESCRÍBENOS</Button>
                        <hr />
                    </div>
                </div>
            </div>

            <Footer/>
        
        </>
    )
}

export default Contact;