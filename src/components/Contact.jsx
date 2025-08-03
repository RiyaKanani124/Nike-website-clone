import React from 'react';
import { useParams } from "react-router-dom";

function Contact() {
    const { fname } = useParams();
    return <h2>this is contact{fname}</h2>;
};

export default Contact;