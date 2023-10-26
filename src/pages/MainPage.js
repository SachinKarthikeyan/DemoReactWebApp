import React from 'react'
import '../assets/css/home.css'
import NorButton from '../components/NorButton/NorButton';
import HomeImage from '../components/HomeImage/HomeImage';


const Main = () => {
    return (
        <>
        <HomeImage/>
        <div id="htitle">
        <h1>Get Insights Using <br/> Sentiment Analysis </h1>
        <h2>Understand your customers like never before!</h2>
        <NorButton to="/home" text="Explore" />
        </div>
        </>
    )
}

export default Main