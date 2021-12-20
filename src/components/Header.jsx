import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Imagotipo from '../assets/imagotipo.png';

import '../styles/Header.css';

class Header extends React.Component {
    render() {

        let headerStyle = { background: this.props.value };

        return(
            <Box sx={{ flexGrow: 1 }} className='header'>
                <AppBar className="h-appBar" style={headerStyle} elevation={0}>
                    <Toolbar>
                        <div id='imagotipo'>
                            <img src={Imagotipo} alt="Digital"/>
                        </div>
                        <Typography id="ops" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to="/" style={link}><h6> Inicio </h6></Link>
                            <Link to="/weare" style={link}><h6 style={{marginLeft: '150px'}}> Nosotros </h6> </Link>
                            <Link to="/services" style={link}><h6 style={{marginLeft: '330px'}}> Servicios </h6></Link>
                            <Link to="/contact" style={link}><h6 style={{marginLeft: '510px'}}> Contacto </h6></Link>
                        </Typography>
                        <Button id="btn-cita" color="inherit" variant="outlined"> PEDIR UNA CITA </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}

const link = {
    textDecoration: 'none'
}

export default Header;
