import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Grupo322 from '../assets/Grupo 322.png'
import Diagnostic from '../assets/diagnostic.png'
import DoctorJob from '../assets/doctorjob.png'
import FormOur from '../assets/Form-Our blog.png';
import FormOur2 from '../assets/Form-Our blog Copy 2.png';
import FormOur3 from '../assets/Form-Our blog Copy.png';

import '../styles/Services_op.css';

const Services_op = () => {
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
                    <h1 style={{textAlign: 'left', marginLeft: '220px'}}> SERVICIOS 1 </h1>
                    <p style={{textAlign: 'left', marginLeft: '220px', width: '510px'}}> 
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor
                    </p>
                </div>
            </div>

            <div className='serv-section'>
                <div className='lorem'>
                    <h1>
                        Lorem ipsum dolor sit amet, <br />
                        <strong style={{color: '#082e4d'}}>consetetur</strong>
                    </h1>
                    <ul>
                        <li>- Musculoeskeletal</li>
                        <li>- Neuroradiology</li>
                        <li>- Cardiovascular</li>
                        <li>- Head and neck</li>
                        <li>- Chest</li>
                        <li>- Body</li>
                        <li>- Women's | Breast</li>
                        <li>- Prostate</li>
                        <li>- Gastrointestinal</li>
                        <li>- Genitourinary</li>
                    </ul>
                </div>

                <div className='jobs' style={{top: '40px', right: '60px'}}>
                    <div id='pictures'>
                        <div id="images"><img style={{width: '330px', marginLeft: '28px'}} src={Diagnostic} alt="" /></div>
                        <div id="images" style={{width: '330px', marginLeft: '390px'}}><img src={DoctorJob} alt="" /></div>
                        <div id="images" style={{width: '330px', marginTop: '230px',marginTop: '250px', marginLeft: '28px'}}><img src={Diagnostic} alt="" /></div>
                        <div id="images" style={{width: '330px', marginTop: '250px',marginLeft: '390px'}}><img src={DoctorJob} alt="" /></div>
                    </div>
                </div>
            </div>

            <div className='jobs' style={{top: '40px', background: '#3D586E', top: '0px'}}>
                <h2 style=
                    {{
                        position: 'absolute',
                        fontFamily: 'Pathway Gothic One', 
                        fontSize: '38px', 
                        textAlign: 'left',
                        left: '110px',
                        top: '70px',
                        color: 'white'
                    }}
                >
                    ¿Cómo lo hacemos?
                </h2>
                <div id='pictures' style={{top: '175px'}}>
                    <div id="images"><img src={FormOur} alt="" /></div>
                    <div id="images" style={{marginLeft: '390px'}}><img src={FormOur2} alt="" /></div>
                    <div id="images" style={{marginLeft: '780px'}}><img src={FormOur3} alt="" /></div>
                    <div id="images" style={{marginTop: '230px'}}><img src={FormOur} alt="" /></div>
                    <div id="images" style={{marginTop: '230px',marginLeft: '390px'}}><img src={FormOur2} alt="" /></div>
                    <div id="images" style={{marginTop: '230px',marginLeft: '780px'}}><img src={FormOur3} alt="" /></div>
                </div>
            </div>      

            <Footer/>              
        </>
    )
}

export default Services_op;