import React from 'react'
import backgroundImage from '../assets/bg-group-photo.jpg'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div className="headerContainer" >
                <h1>NOTEWORTHY</h1>
                <h1>A CAPPELLA</h1>
            </div>
        </div>
    )
};

export default Home;