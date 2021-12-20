import * as React from 'react';
import Button from '@mui/material/Button';
import Imagotipo from '../assets/imagotipo.png';

import '../styles/Footer/Footer.css';

class Footer extends React.Component {
    render() {
        const topFooter = {
            top: this.props.value
        }

        return(
            <footer className="footer" style={topFooter}>
                <section className="part1">
                    <div id='p1-info'>
                        <p> ¿Necitas una cita? </p>
                        <h1> PÍDELA YA MISMO </h1>
                    </div>

                    <div id="p1-btn">
                        <Button id="pCita"> PEDIR UNA CITA </Button>
                    </div>

                    <hr />
                </section>
                
                <section className="part2">
                    <div className="box-part2">
                        <div className="b-part2">
                        
                            <div className="column-1">
                                <img src={Imagotipo} alt="Logo" />
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed 
                                    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                </p>
                                <p style={{marginTop: '20px'}}>41 Tamiani Canal Road Miami, Florida, Miami</p>
                                <h4>786-860-9424 - 305-283-6612</h4>
                                <h4>Lunes - Viernes: 8:00 AM - 7:00 PM Sábados: 8:00 AM - 2:00 PM</h4>
                            </div>
                        
                            <div className="column-2">
                                <h4>
                                    Enlaces Rápidos
                                </h4>
                                <p>
                                    <a href="#!">Inicio</a>
                                </p>
                                <p>
                                    <a href="#!">Nosotros</a>
                                </p>
                                <p>
                                    <a href="#!">Servicios</a>
                                </p>
                                <p>
                                    <a href="#!">Citas</a>
                                </p>
                                <p>
                                    <a href="#!">Contacto</a>
                                </p>
                            </div>
                            
                            <div className="column-2" style={{left: '270px'}}>
                            
                                <h4>
                                    Otros enlaces
                                </h4>
                                <p>
                                    <a href="#!" >Políticas de privacidad</a>
                                </p>
                                <p>
                                    <a href="#!" >Términos y condiciones</a>
                                </p>
                                <p>
                                    <a href="#!" >Aviso legal</a>
                                </p>
                                <p>
                                    <a href="#!" >Faq</a>
                                </p>
                            </div>
                            
                            <div className="column-2" style={{left: '350px', width: '250px'}}>
                            
                                <h4>
                                    Servicios
                                </h4>
                                <p>
                                    <a href="#!">Ct scan</a>
                                </p>
                                <p>
                                    <a href="#!">Mri magnetic resonance</a>
                                </p>
                                <p>
                                    <a href="#!">Digital x-ray</a>
                                </p>
                                <p>
                                    <a href="#!">Digital bilateral mammography</a>
                                </p>
                                <p>
                                    <a href="#!">Electrocardiogram (ekg)</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <div className='copy-right'>
                    © Copyright DIGITAL MEDICAL DIAGNOSTICS 2020. All Right Reserved.
                </div>
            </footer>
        )
    }
}

export default Footer;