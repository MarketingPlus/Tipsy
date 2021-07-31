import React from 'react';
import logo from '../assets/tipsy-logo.svg';


const styles = {
    logo: {
        marginBottom: 50,
        marginTop: 25,
        maxWidth: 300
    }
}

const Logo = () => (
    <div className="container mx-auto text-center">
        <img className='img-fluid' src={logo} alt='tipsy' style={styles.logo} />
        </div>
)
export default Logo;