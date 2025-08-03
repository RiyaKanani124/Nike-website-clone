import React from 'react';
import { useParams } from "react-router-dom";

function About() {
    const { fname } = useParams();
    return <h2>this is about{fname}</h2>;
};

export default About;