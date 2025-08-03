
import React from 'react';
import { useParams } from "react-router-dom"; 
import SimpleSlider from './simpleSlider'; 
import Product from './Product'; 
import FAQ from './FAQ';


function Home() {
    const { fname } = useParams(); 
    return (
        <div className="container">
            <h2>{fname}</h2>
            <SimpleSlider />
            <Product />
            <FAQ />
        </div>
    );
}

export default Home;
