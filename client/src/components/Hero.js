import React from 'react';
import hero from '../assets/heart.png'


const styles = {
    hero: {
        marginBottom: 25
    }
}
const Hero = () => (
    <img className='hero img-fluid' src={hero} alt='Drink' style={styles.hero} />
);

export default Hero;